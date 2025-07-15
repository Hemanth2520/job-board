//import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow mb-6">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">Job Board</Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/admin" className="text-gray-700 hover:text-blue-600">Admin</Link>
      </div>
    </div>
  </nav>
);

export default Navbar; 