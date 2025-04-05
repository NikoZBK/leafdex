import React from 'react';
import { useNavigate } from 'react-router-dom';
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
        <img src={leafDex} alt="LeafDex Logo" className={navClasses.logo} />
        <ul className={navClasses.list}>
          <li>
            <a href="#home" className={navClasses.link}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={navClasses.link}>
              About
            </a>
          </li>
          <li>
            <a href="#products" className={navClasses.link}>
              Products
            </a>
          </li>
          <li>
            <a href="#contact" className={navClasses.link}>
              Contact
            </a>
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
