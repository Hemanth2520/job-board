// File: seed/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Job = require('../models/Job');

dotenv.config();

const seedJobs = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Job.deleteMany();

  await Job.insertMany([
    {
      title: 'Frontend Developer',
      company: 'Google',
      location: 'Remote',
      description: 'Work on cutting-edge UI components using React.',
      type: 'Full-time'
    },
    {
      title: 'Backend Developer',
      company: 'Amazon',
      location: 'Hyderabad',
      description: 'Build scalable APIs with Node.js and MongoDB.',
      type: 'Part-time'
    },
    {
      title: 'UI/UX Designer',
      company: 'Adobe',
      location: 'Bangalore',
      description: 'Design intuitive interfaces and user flows.',
      type: 'Remote'
    }
  ]);

  console.log('Jobs seeded');
  process.exit();
};

seedJobs();
