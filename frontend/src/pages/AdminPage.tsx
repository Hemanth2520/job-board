import { useEffect, useState } from 'react';
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://job-board-4ewq.onrender.com/',
});

const AdminPage = () => {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchApps = async () => {
    setLoading(true);
    try {
      const res = await API.get('/applications');
      setApplications(res.data);
    } catch (err) {
      console.error('Error loading applications', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApps();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Submitted Applications</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={fetchApps}
          disabled={loading}
        >
          {loading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      {applications.map((app) => (
        <div key={app._id} className="border p-3 mb-4 rounded shadow">
          <h3 className="font-semibold">{app.name} ({app.email})</h3>
          <p>Applied for: <strong>{app.job_id?.title}</strong> at {app.job_id?.company}</p>
          <p>Resume: <a href={app.resume_link} className="text-blue-600 underline" target="_blank">View</a></p>
          <p>Cover letter:</p>
          <pre className="bg-gray-50 p-2">{app.cover_letter}</pre>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
