// Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Shared classes for form elements using DaisyUI semantic classes
const formClasses = {
  container:
    'min-h-screen w-full fixed top-0 left-0 flex items-center justify-center bg-base-300',
  card: 'card bg-base-200 backdrop-blur-sm w-full max-w-md p-8 mx-4',
  form: 'form-control w-full space-y-4',
  inputGroup: 'form-control',
  label: 'label-text text-base-content pb-2',
  input:
    'input input-bordered w-full bg-base-100 text-base-content focus:outline-primary',
  button: 'btn btn-primary w-full',
  link: 'text-sm text-center mt-6 text-base-content/70',
  title: 'text-2xl font-semibold text-base-content text-center mb-2',
  subtitle: 'text-base-content/70 text-center text-sm mb-6',
  divider: 'divider my-6',
  googleButton: 'btn btn-outline w-full gap-3',
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful login
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      // arbitrary login check
      if (email && password) {
        // Simulate a successful login
        localStorage.setItem('isAuthenticated', 'true');
        // If login is successful, navigate to the main app
        console.log('Login successful');
        navigate('/');
      } else {
        console.log('Login failed');
        setError('Please enter both email and password');
      }
    } catch (err) {
      setError('Failed to login. Please try again. Error: ' + err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={formClasses.container}>
      <div className={formClasses.card}>
        <h2 className={formClasses.title}>Welcome</h2>
        <p className={formClasses.subtitle}>
          Sign in to continue your plant discoveryjourney
        </p>

        <button className={formClasses.googleButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          Continue with Google
        </button>

        <div className={formClasses.divider}>or continue with email</div>

        <form onSubmit={handleSubmit} className={formClasses.form}>
          {error && (
            <div className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}
          <div className={formClasses.inputGroup}>
            <label className="label pb-2">
              <span className={formClasses.label}>Email</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={formClasses.input}
              required
              autoComplete="off"
              placeholder="Enter your email"
            />
          </div>
          <div className={formClasses.inputGroup}>
            <label className="label">
              <span className={formClasses.label}>Password</span>
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={formClasses.input}
              required
              autoComplete="off"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mb-2">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-sm checkbox-primary"
              />
              <span className="label-text ml-2">Remember me</span>
            </label>
            <button type="button" className="btn btn-link btn-sm px-0">
              Forgot password?
            </button>
          </div>
          <button
            type="submit"
            className={`${formClasses.button} ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className={formClasses.link}>
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="btn btn-link btn-sm px-1"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
