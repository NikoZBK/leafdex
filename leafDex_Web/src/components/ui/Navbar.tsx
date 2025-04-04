import React from 'react';

// Shared classes for navigation
const navLinkClasses =
  'text-primary hover:bg-base-100 rounded-lg transition-colors duration-300';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-200 fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={navLinkClasses}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
