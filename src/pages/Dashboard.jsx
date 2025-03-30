import TestFetch from './TestFetch';
import { useAuth } from '../AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login');
    };

    return (
      <div className="w-screen h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center px-6 py-12">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl font-bold text-indigo-700 text-center mb-10">
            Welcome, {user?.displayName || 'User'}! 🎉
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Ratio Analysis - Active */}
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h2 className="text-xl font-bold mb-2">Phase 1: Ratio Analysis</h2>
              <p className="mb-4 text-gray-600">Learn how to analyze financial ratios step-by-step.</p>
              <button
                onClick={() => navigate('/quiz/ratio-analysis')}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                Begin
              </button>
            </div>

            {/* Coming Soon Cards */}
            <div className="bg-white rounded-lg shadow p-6 text-center opacity-50">
              <h2 className="text-xl font-bold mb-2">Phase 2</h2>
              <p className="mb-4 text-gray-600">Coming Soon</p>
              <button className="bg-gray-300 text-white px-4 py-2 rounded cursor-not-allowed" disabled>
                Locked
              </button>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center opacity-50">
              <h2 className="text-xl font-bold mb-2">Phase 3</h2>
              <p className="mb-4 text-gray-600">Coming Soon</p>
              <button className="bg-gray-300 text-white px-4 py-2 rounded cursor-not-allowed" disabled>
                Locked
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;