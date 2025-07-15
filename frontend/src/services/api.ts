import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
});

export const getJobs = async () => {
  const res = await API.get('/jobs');
  return res.data;
};

export const getJobById = async (id: string) => {
  const res = await API.get(`/jobs/${id}`);
  return res.data;
};

export const submitApplication = async (applicationData: any) => {
  const res = await API.post('/applications', applicationData);
  return res.data;
};
