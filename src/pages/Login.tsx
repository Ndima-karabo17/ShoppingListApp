import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';

import {
  loginStart,
  loginSuccess,
  loginFailure,
} from '../features/login/loginSlice';
import { Link } from 'react-router';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loginStart());


    const { email, password } = loginData;
    if (email === 'ndima@com' && password === 'ndima') {
      dispatch(loginSuccess({ email }));
      alert('Logged in successfully');
    } else {
      dispatch(loginFailure('Invalid email or password'));
    }
  };

  return (
     <div className=' max-h-200'>
    <div className='h-182 text-black ml-120'>
      <h2 className='text-3xl font-mono '>Login to do Shopping List</h2><br />
      <p className='text-xl font-serif text-zinc-400'>Logging in ensures your catalog is saved securely <br />so you never have to start from scratch</p>
      <form onSubmit={handleSubmit} className='mt-30'>
        <div className='mt-5'>
          <label htmlFor="email" className='text-black'>Email Address:</label><br />
          <input
            type="email"
            name="email"
            id="email"
            className='bg-white w-100 h-10 rounded-xl border-1 text-black'
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mt-5'>
          <label htmlFor="password" className='text-black'>Password:</label><br />
          <input
            type="password"
            name="password"
            id="password"
            className='bg-white w-100 h-10 rounded-xl border-1 text-black'
            
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='mt-10 flex gap-5'>
            <br />
          <div>
            <button type="submit" disabled={loading} className='border-1 hover:border-amber-100 text-xl rounded-xl w-27 h-10'>
            {loading ? 'Logging in...' : 'LOGIN'}
          </button>
          </div>
          <div>
            <p className='mt-3'> Don’t have account? <Link to='/register' className='hover:text-blue-400'>Register</Link></p>
            
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
