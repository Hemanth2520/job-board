import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }: { job: any }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
      <p className="text-sm text-gray-600">{job.company}</p>
      <p className="text-sm text-gray-600 mb-4">{job.location}</p>
      <span className="inline-block bg-gray-100 px-2 py-1 text-xs rounded-full mb-4">{job.type}</span>
      <div className="flex justify-end">
        <button
          onClick={() => navigate(`/jobs/${job._id}`)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;