//import { useState } from 'react'
import './index.css';
import video from './assets/videoplayback.webm';

function App() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src={video} type="video/webm" />
        </video>
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Leafdex</h1>
      </div>
    </div>
  );
}

export default App;
