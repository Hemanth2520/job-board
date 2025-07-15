import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await axios.get('http://localhost:5000/applications');
        setApplications(res.data);
      } catch (err) {
        console.error('Error loading applications', err);
      }
    };
    fetchApps();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Submitted Applications</h2>
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
