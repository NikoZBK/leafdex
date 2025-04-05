//import { useState } from 'react'
import leafDex from './assets/LeafDex.png';
import './index.css';
import video from './assets/videoplayback.webm';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <div className="video-background">
        <video autoPlay loop muted className="background-video">
          <source src={video} type="video/webm" />
        </video>
      </div>

      {/* Logo */}
      <div>
        <img src={leafDex} className="logo" alt="Vite logo" />
      </div>
      <h1>Leafdex</h1>
    </>
  );
}

export default App;
