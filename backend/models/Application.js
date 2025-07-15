// File: models/Application.js
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  job_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  },
  name: String,
  email: String,
  resume_link: String,
  cover_letter: String,
});

module.exports = mongoose.model('Application', applicationSchema);