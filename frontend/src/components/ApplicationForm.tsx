import { useState } from 'react';
import { submitApplication } from '../services/api';

const ApplicationForm = ({
  jobId,
  jobTitle,
  company,
}: {
  jobId: string;
  jobTitle: string;
  company: string;
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume_link: '',
    cover_letter: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitApplication({ ...formData, job_id: jobId });
      alert('Application submitted!');
      setFormData({
        name: '',
        email: '',
        resume_link: '',
        cover_letter: '',
      });
    } catch (err) {
      console.error(err);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Apply for {jobTitle}</h2>
      <p className="text-gray-600 mb-6">at {company}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          className="w-full border px-4 py-2 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email Address"
          type="email"
          className="w-full border px-4 py-2 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="resume_link"
          placeholder="Resume URL"
          className="w-full border px-4 py-2 rounded"
          value={formData.resume_link}
          onChange={handleChange}
          required
        />
        <textarea
          name="cover_letter"
          placeholder="Cover Letter"
          className="w-full border px-4 py-2 rounded h-32"
          value={formData.cover_letter}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-blue-500 text-white px-4 py-2 rounded transition ${
            isSubmitting
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-blue-600'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
