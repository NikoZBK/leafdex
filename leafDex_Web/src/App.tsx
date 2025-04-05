//import { useState } from 'react'
import './index.css';
import video from './assets/videoplayback.webm';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-50"
        >
          <source src={video} type="video/webm" />
        </video>
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center pt-20">Leafdex</h1>
      </div>
    </div>
  );
}

export default App;
