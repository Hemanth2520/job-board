import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getJobById } from '../services/api';
import ApplicationForm from '../components/ApplicationForm';

const JobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (id) getJobById(id).then((job) => setJob(job));
  }, [id]);

  if (!job) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="text-blue-600 mb-4">← Back to Jobs</button>
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-600 mb-4">{job.location}</p>
      <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm mb-6">{job.type}</span>
      <h2 className="text-xl font-semibold mb-2">Job Description</h2>
      <p className="text-gray-700 mb-6">{job.description}</p>
      {!showForm && (
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mb-6"
          onClick={() => setShowForm(true)}
        >
          Apply Now
        </button>
      )}
      {showForm && (
        <ApplicationForm jobId={job._id} jobTitle={job.title} company={job.company} />
      )}
    </div>
  );
};

export default JobPage;
