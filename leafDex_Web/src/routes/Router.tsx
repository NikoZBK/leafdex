import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import App from '../App';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import IdentifiedPlantsPage from '../pages/IdentifiedPlantsPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

// Layout components
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

const Router = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>

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

      {/* Catch all route - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
