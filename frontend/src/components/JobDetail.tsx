import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJobById } from '../services/api';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJobById(id as string);
        setJob(data);
      } catch (error) {
        console.error('Failed to load job:', error);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) return <p>Loading job...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-700"><strong>Company:</strong> {job.company}</p>
      <p className="text-gray-700"><strong>Location:</strong> {job.location}</p>
      <p className="text-gray-700"><strong>Type:</strong> {job.type}</p>
      <p className="text-gray-800 mt-4 whitespace-pre-line">{job.description}</p>
    </div>
  );
};

export default JobDetail;
