// File: src/components/JobCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
}

const JobCard: React.FC<JobCardProps> = ({ id, title, company, location }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{company} • {location}</p>
      <Link to={`/jobs/${id}`} className="text-blue-500 mt-2 inline-block">
        View Details
      </Link>
    </div>
  );
};

export default JobCard;
