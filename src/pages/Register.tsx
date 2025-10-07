import React, { useState } from 'react';
import { registerUser, type RegisterUser } from '../features/register/registerSlice';
import { v4 as uuidv4 } from 'uuid';
import   {useAppDispatch} from '../store/hook'
import { Link } from 'react-router';
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
    <>
    <div className='bg-white max-h-200'>
    <div className='bg-white text-black ml-120 '>
      <h2 className='text-3xl font-mono'>Let's Create Account</h2>
      <p className='text-xl font-serif text-zinc-400'>Create an account to easily save and access  <br />your favorite items anytime, from any device.</p>
      <form onSubmit={handleSubmit} >
        <div className='mt-10'>
          <label>Name:</label><br />
          <input type="text" name="name" value={formData.name} 
          className='bg-white w-100 h-10 rounded-xl border-1 text-black'
          onChange={handleChange} required />
        </div>
        <div className='mt-5'>
          <label>Surname:</label><br />
          <input type="text" name="surname" value={formData.surname} 
          className='bg-white w-100 h-10 rounded-xl border-1 text-black'
          onChange={handleChange} required />
        </div>
        <div className='mt-5'>
          <label>Email Address:</label><br />
          <input type="email" name="email" value={formData.email} 
          className='bg-white w-100 h-10 rounded-xl border-1 text-black'
          onChange={handleChange} required />
        </div>
        <div className='mt-5'>
          <label>Cell Number:</label><br />
          <input type="tel" name="cellNumber" value={formData.cellNumber} 
          className='bg-white w-100 h-10 rounded-xl border-1 text-black'
          onChange={handleChange} required />
        </div>
        <div className='mt-5'>
          <label>Password:</label><br />
          <input type="password" name="password" value={formData.password} 
          className='bg-white w-100 h-10 rounded-xl border-1 text-black'
          onChange={handleChange} required />
        </div>
        <div>
             <br />
          <p>By registering you agree to <Link to='/privacy' className='hover:text-amber-200'>terms and privacy</Link>.</p>
       
        </div>
        <div className='mt-5 flex gap-5'>
          <div>
            <button type="submit" className='border-1 hover:border-amber-100 rounded-xl w-27 h-10'>REGISTER</button>
          </div>
          <div>
            <p className='mt-3'>Already registered? <Link to='/login' className='hover:text-blue-400'>Login</Link></p>
          </div>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default Register;
