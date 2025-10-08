import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from '../features/login/loginSlice';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); // ✅ React Router hook
  const { loading, error } = useAppSelector(state => state.login);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const response = await fetch(
        `http://localhost:5000/users?email=${encodeURIComponent(
          loginData.email
        )}&password=${encodeURIComponent(loginData.password)}`
      );
      const users = await response.json();

      if (users.length === 1) {
        dispatch(loginSuccess(users[0]));
        alert('Logged in successfully');

        // ✅ Redirect to /catelog after login
        navigate('/catelog');
      } else {
        dispatch(loginFailure('Invalid email or password'));
      }
    } catch (err) {
      console.error('Login error:', err);
      dispatch(loginFailure('An error occurred during login'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl sm:text-3xl font-mono mb-4 text-center">
          Login to Your Shopping List
        </h2>
        <p className="text-base sm:text-lg text-center text-zinc-500 mb-6">
          Logging in ensures your catalog is saved securely<br />
          so you never have to start from scratch.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={loginData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-6 py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-md text-lg font-semibold"
            >
              {loading ? 'Logging in...' : 'LOGIN'}
            </button>

            <p className="text-sm text-center sm:text-left">
              Don’t have an account?{' '}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
