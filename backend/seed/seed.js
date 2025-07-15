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
      description:
        'As a Frontend Developer at Google, you will work on crafting highly interactive and scalable web interfaces using React, TypeScript, and modern design systems. You’ll collaborate with product managers and designers to bring complex features to life, ensure accessibility compliance, and maintain top-tier performance across browsers and devices.',
      type: 'Full-time',
    },
    {
      title: 'Backend Developer',
      company: 'Amazon',
      location: 'Hyderabad',
      description:
        'Join Amazon’s backend team to build robust APIs, manage data pipelines, and optimize server-side operations for scale. You’ll use Node.js, Express, and MongoDB, implement authentication systems, and collaborate with cross-functional teams to improve latency and data reliability at massive scale.',
      type: 'Part-time',
    },
    {
      title: 'UI/UX Designer',
      company: 'Adobe',
      location: 'Bangalore',
      description:
        'At Adobe, UI/UX Designers are expected to take ownership of design workflows, create wireframes, and build stunning interactive prototypes. You will conduct user research, usability testing, and work closely with engineers to deliver user-centric designs across web and mobile platforms.',
      type: 'Remote',
    },
    {
      title: 'Full Stack Engineer',
      company: 'Netflix',
      location: 'Mumbai',
      description:
        'As a Full Stack Engineer at Netflix, you’ll develop end-to-end features using React, Node.js, and GraphQL. You’ll optimize video delivery workflows, enhance personalization algorithms, and ensure a seamless user experience on both frontend and backend. Prior experience in performance tuning and A/B testing is a big plus.',
      type: 'Full-time',
    },
    {
      title: 'Data Analyst',
      company: 'Microsoft',
      location: 'Pune',
      description:
        'Microsoft is seeking a Data Analyst to turn complex datasets into actionable insights. You will use SQL, Power BI, and Python to extract trends, build dashboards, and help product and marketing teams make data-informed decisions. Understanding of statistical modeling is highly desirable.',
      type: 'Part-time',
    },
    {
      title: 'DevOps Engineer',
      company: 'Spotify',
      location: 'Chennai',
      description:
        'As a DevOps Engineer, you will help scale Spotify’s infrastructure by implementing CI/CD pipelines, managing containerized applications using Docker and Kubernetes, and ensuring 99.99% uptime. You’ll work closely with SREs and software teams to monitor system health and automate routine operations.',
      type: 'Full-time',
    },
  ]);
  

  console.log('Jobs seeded');
  process.exit();
};

seedJobs();
