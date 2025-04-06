import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import leafDex from '../../assets/leaf.svg';

// Shared classes for navigation elements
const navClasses = {
  container: 'navbar bg-base-200 fixed top-0 left-0 w-full z-50',
  list: 'menu menu-horizontal px-1',
  link: 'text-primary hover:bg-base-100 rounded-lg transition-colors',
  buttonGroup: 'flex gap-2',
  button: 'btn btn-primary btn-sm',
  logo: 'w-8 h-8 mr-4 scale-x-[-1]',
};

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className={navClasses.container}>
      <div className="navbar-start">
        <Link to="/" className="flex items-center">
          <img src={leafDex} alt="LeafDex Logo" className={navClasses.logo} />
        </Link>
        <ul className={navClasses.list}>
          <li>
            <Link to="/" className={navClasses.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={navClasses.link}>
              About
            </Link>
          </li>
          <li>
            <Link to="/plants" className={navClasses.link}>
              My Plants
            </Link>
          </li>
          <li>
            <Link to="/contact" className={navClasses.link}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className={navClasses.buttonGroup}>
          <button
            className={navClasses.button}
            onClick={() => navigate('/login')}
          >
            Log in
          </button>
          <button
            className={navClasses.button}
            onClick={() => navigate('/signup')}
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
