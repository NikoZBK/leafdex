import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import SignupPage from '../pages/SignupPage';

const Router = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/login" element={<App />} />
            <Route path="/signup" element={<SignupPage />} />


            {/* Catch-all: redirect to / */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default Router;
