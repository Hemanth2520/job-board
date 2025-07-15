import  { useEffect, useState } from 'react';
import { getJobs } from '../services/api';
import JobCard from '../components/JobCard';

type Job = {
  _id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  type: string;
};

const Home = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobs()
      .then((res) => {
        setJobs(res || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setJobs([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading jobs...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-center">Find Your Next Opportunity</h1>
      <p className="text-center text-gray-600 mb-8">Browse through our open positions and find your perfect fit.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
          
        ))}
      </div>
    </div>
  );
};

export default Home;
