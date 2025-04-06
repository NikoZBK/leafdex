import { Outlet, Navigate } from 'react-router-dom';

// This is a temporary auth check. Replace with actual auth logic later
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

const AuthLayout = () => {
  // Redirect to home if already authenticated
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-base-300">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
