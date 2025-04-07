import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import SignupPage from '../pages/SignupPage';
import IdentifiedPlantsPage from '../pages/IdentifiedPlantsPage';
import ContactPage from '../pages/ContactPage';
import ProtectedRoute from './ProtectedRoute';
import MainLayout from '../layouts/MainLayout';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
const Router = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected routes */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<App />} />
        <Route path="/plants" element={<IdentifiedPlantsPage />} />
        {/* Add more protected routes here as needed */}
      </Route>

      {/* Public routes */}
      <Route element={<MainLayout />}>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/* Catch-all: redirect to / */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
