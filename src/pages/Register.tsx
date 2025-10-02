import React, { useState } from 'react';
import { useAppDispatch } from '../store/hook'; 
import { registerUser, type RegisterUser } from '../features/register/registerSlice';
import { v4 as uuidv4 } from 'uuid';

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
    <div>
      <h2>Let's Create Account</h2>
      <h3>Register to stay organized, stress-free.</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Surname:</label>
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
        </div>
        <div>
          <label>Email Address:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Cell Number:</label>
          <input type="tel" name="cellNumber" value={formData.cellNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <button type="submit">REGISTER</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
