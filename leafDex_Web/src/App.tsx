//import { useState } from 'react'
import './index.css';
import video from './assets/videoplayback.webm';
import { classes } from './styles/classes';

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
        <div
          className={`${classes.card} bg-base-200/40 backdrop-blur-md shadow-2xl max-w-md w-full mx-4 border border-base-300/20 transition-all duration-300`}
        >
          <div className={`${classes.cardBody} items-center text-center p-8`}>
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-primary"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" fill="none" />
                <path
                  d="M12 8C12 8 10 10 10 12C10 14 12 16 12 16C12 16 14 14 14 12C14 10 12 8 12 8Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1 className={`${classes.heading1} text-5xl tracking-tight`}>
              Leafdex
            </h1>
            <p className="text-base-content/80 text-lg mb-8 font-light">
              Your personal plant companion
            </p>
            <div
              className={`${classes.gap4} card-actions justify-center w-full`}
            >
              <button
                className={`${classes.btnPrimary} btn-lg flex-1 max-w-[200px] transition-transform duration-200`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.05 2.31-.75 3.57-.84 1.51-.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.65 1.48-1.52 2.48-2.53 3.52zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.83 2.35-1.61 4.16-3.74 4.25z" />
                </svg>
                iOS
              </button>
              <button
                className={`${classes.btnPrimary} btn-lg flex-1 max-w-[200px] transition-transform duration-200`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.523 15.3414c-.5511-.2475-1.1553-.3809-1.7585-.3809-.6032 0-1.2074.1334-1.7585.3809L12 16.5l-1.2475-.5586c-.5511-.2475-1.1553-.3809-1.7585-.3809-.6032 0-1.2074.1334-1.7585.3809L5.5 16.5v-9h13v9l-1.477-.6586zM12 2.5c-1.657 0-3 1.343-3 3v1h6v-1c0-1.657-1.343-3-3-3z" />
                </svg>
                Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
