import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { submitApplication } from '../services/api';

const ApplicationForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume_link: '',
    cover_letter: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !formData.email.includes('@'))
      newErrors.email = 'Valid email required';
    if (!formData.resume_link || !formData.resume_link.startsWith('http'))
      newErrors.resume_link = 'Valid resume link required';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await submitApplication({ ...formData, job_id: id });
      alert('Application submitted!');
      setFormData({ name: '', email: '', resume_link: '', cover_letter: '' });
    } catch (err) {
      console.error(err);
      alert('Submission failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-6 p-4 border rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Apply for this job</h3>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="w-full border p-2 mb-1"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="w-full border p-2 mb-1"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

      <input
        type="url"
        name="resume_link"
        placeholder="Resume URL"
        className="w-full border p-2 mb-1"
        value={formData.resume_link}
        onChange={handleChange}
      />
      {errors.resume_link && <p className="text-red-500 text-sm mb-2">{errors.resume_link}</p>}

      <textarea
        name="cover_letter"
        placeholder="Cover letter"
        className="w-full border p-2 mb-3"
        rows={5}
        value={formData.cover_letter}
        onChange={handleChange}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Submit Application
      </button>
    </form>
  );
};

export default ApplicationForm;
