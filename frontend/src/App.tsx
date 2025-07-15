
// File: src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App = () => {
  return (
    <Router>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold p-4">CareerBoost</h1>
        {/* //<Route path="/" element={<Home />} /> */}
        <Routes />
      </div>
    </Router>
  );
};

export default App;