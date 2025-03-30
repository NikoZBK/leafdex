import leafDex from './assets/LeafDex.png';

import './App.css';
import Card from './components/ui/Card';

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
      {/* 
    /*logo */}
      <Card>
        <img src={leafDex} className="logo" alt="Vite logo" />
      </Card>
      <h1>Leafdex</h1>
    </>
  );
}

export default App;
