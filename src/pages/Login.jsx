import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      console.log("Logged in:", userCred.user);
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#eae6f9] flex items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-5xl h-full rounded-lg overflow-hidden flex shadow-lg">
        {/* Left Side - Login Form */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-center p-12">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Welcome back!</h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-gray-600 mb-1">Email address</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-full hover:bg-indigo-600 transition">
                SIGN IN
              </button>
              <p className="text-sm text-center text-indigo-600 hover:underline cursor-pointer">Forgot your password?</p>
            </form>
          </div>
        </div>

        {/* Right Side - Sign Up Prompt */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-blue-500 text-white px-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Don't have an account?</h2>
            <p className="mb-6">Start your journey in one click</p>
            <Link to="/signup">
              <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition">
                SIGN UP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;