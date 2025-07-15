import { useEffect, useState } from 'react';
import { getJobs } from '../services/api';
import JobCard from '../components/JobCard';

const Home = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
        setFilteredJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleFilter = (type: string) => {
    setFilter(type);
    if (type === 'All') {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter((job) => job.type === type));
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">CareerBoost Job Board</h1>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-6">
        {['All', 'Full-Time', 'Part-Time', 'Remote'].map((type) => (
          <button
            key={type}
            onClick={() => handleFilter(type)}
            className={`px-4 py-2 border rounded ${
              filter === type ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <JobCard
            key={job._id}
            id={job._id}
            title={job.title}
            company={job.company}
            location={job.location}
          />
        ))
      ) : (
        <p>No jobs found for selected filter.</p>
      )}
    </div>
  );
};

export default Home;
