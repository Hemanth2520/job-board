// File: controllers/applicationController.js
const Application = require('../models/Application');

exports.submitApplication = async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json({ message: 'Application submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.getAllApplications = async (req, res) => {
  try {
    const apps = await Application.find().populate('job_id', 'title company');
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
};

