import { Navigate, useLocation } from 'react-router-dom';

// This is a temporary auth check. Replace with your actual auth logic
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Redirect to login page but save the attempted location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
