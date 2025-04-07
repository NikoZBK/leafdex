import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import SignupPage from '../pages/SignupPage';
import IdentifiedPlantsPage from '../pages/IdentifiedPlantsPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

const Router = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/login" element={<App />} />
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
