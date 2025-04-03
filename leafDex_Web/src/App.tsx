import Test from './components/Test';
import { PlantProvider } from './context/PlantContext';

import './index.css';

function App() {
  return (
    <>
      {/* New top navigation */}
      <nav className="top-nav">
        <ul className="nav-list">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#products" className="nav-link">
              Products
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>{' '}
      </nav>
      <PlantProvider>
        <Test />
      </PlantProvider>
    </>
  );
}

export default App;
