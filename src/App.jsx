import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Quiz from './pages/Quiz';


function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="min-h-screen w-screen flex flex-col bg-gradient-to-br from-white to-blue-100 px-4">
        
        {/* Top Right Login Button */}
        <div className="w-full flex justify-end mt-4">
          <Link to="/login">
           <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow mr-2 hover:bg-blue-700">
             Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow hover:bg-blue-700">
              Signup
            </button>
          </Link>
        </div>

        {/* Centered Content */}
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Welcome to FIQ
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Tagline: Learn Finance by Solving, Not Just Reading
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
            <h2 className="text-xl font-bold text-blue-600 mb-2">
              Phase 1: Ratio Analysis
            </h2>
            <Link to="/login">
              <button className="bg-gray-900 text-white px-4 py-2 rounded">
                Login to Start
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Hover Button */}
        <div className="w-full flex justify-center mb-6">
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full transition">
            Hover over me to learn more ➡️
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;