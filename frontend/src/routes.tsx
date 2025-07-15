import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobPage from './pages/JobPage';
import AdminPage from './pages/AdminPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/jobs/:id" element={<JobPage />} />
    <Route path="/admin" element={<AdminPage />} />
  </Routes>
);

export default AppRoutes;
