import { useState } from 'react'
import leafDex from './assets/LeafDex.png'

import './App.css'

function App() {
  return (
    <>{/* New top navigation */}
           <nav className="top-nav">
        <ul className="nav-list">
          <li>
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li>
            <a href="#about" className="nav-link">About</a>
          </li>
          <li>
            <a href="#products" className="nav-link">Products</a>
          </li>
          <li>
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul> </nav>
{/* 
    /*logo */ }
      <div>
        <img src={leafDex} className="logo" alt="Vite logo" />
      </div>
      <h1>Leafdex</h1>
    </>
  )
}

export default App
