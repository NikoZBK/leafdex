import Test from './components/Test';
import { PlantProvider } from './context/PlantContext';
import './index.css';

// Shared classes for navigation
const navLinkClasses =
  'text-primary hover:bg-base-100 rounded-lg transition-colors duration-300';

function App() {
  return (
    <>
      {/* New top navigation using DaisyUI */}
      <div className="navbar bg-base-200 fixed top-0 left-0 w-full z-50">
        <div className="navbar-start">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#home" className={navLinkClasses}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={navLinkClasses}>
                About
              </a>
            </li>
            <li>
              <a href="#products" className={navLinkClasses}>
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className={navLinkClasses}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <PlantProvider>
        <Test />
      </PlantProvider>
    </>
  );
}

export default App;
