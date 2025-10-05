import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';

import {
  loginStart,
  loginSuccess,
  loginFailure,
} from '../features/login/loginSlice';

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
    <div>
      <h2>Login to do Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'LOGIN'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
