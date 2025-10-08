import React, { useState } from 'react';
import { registerUser, type RegisterUser } from '../features/register/registerSlice';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../store/hook';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<Omit<RegisterUser, 'id'>>({
    name: '',
    surname: '',
    email: '',
    password: '',
    cellNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userWithId: RegisterUser = {
      ...formData,
      id: uuidv4(),
    };

    dispatch(registerUser(userWithId));

    setFormData({
      name: '',
      surname: '',
      email: '',
      password: '',
      cellNumber: '',
    });

    alert('You have successfully registered');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-mono mb-4 text-center">Let's Create an Account</h2>
        <p className="text-sm sm:text-base text-zinc-500 mb-6 text-center">
          Create an account to easily save and access <br />your favorite items anytime, from any device.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>

          {/* Surname */}
          <div className="mb-4">
            <label htmlFor="surname" className="block font-medium text-gray-700 mb-1">Surname</label>
            <input
              type="text"
              name="surname"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>

          {/* Cell Number */}
          <div className="mb-4">
            <label htmlFor="cellNumber" className="block font-medium text-gray-700 mb-1">Cell Number</label>
            <input
              type="tel"
              name="cellNumber"
              id="cellNumber"
              value={formData.cellNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>

          {/* Terms */}
          <p className="text-sm text-gray-500 mt-4">
            By registering, you agree to our&nbsp;
            <Link to="/privacy" className="text-blue-500 hover:underline">terms and privacy</Link>.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-md text-lg font-semibold"
            >
              REGISTER
            </button>

            <p className="text-sm">
              Already registered?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
