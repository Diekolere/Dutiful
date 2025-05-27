import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Eye from './Eye';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Proceed with login
      console.log('Logging in with', { email, password });
    }
  };

  return (
    <div>
      <div className='flex flex-col '>
       <p className='mt-15 text-center  text-[#686868]'>Jump right back in</p>
      <p className='mt-3 text-center  font-bold text-[30px] text-[#1E1E4B]'>Login</p>
      </div>

      <form className='mx-auto max-w-[400px] px-6  py-6' onSubmit={handleSubmit}>
        {/* Email */}
        <label className='text-[#603F8B] block text-[18px] mt-6 text-center sm:mr-80 mr-70'>Email</label>
        <input
          type="text"
          className='w-full h-[60px] mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7EAF1]'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

        {/* Password */}
        <label className='text-[#603F8B] block text-[18px] mt-6 text-center mr-70'>Password</label>
        <Eye password={password} setPassword={setPassword} error={errors.password} />

        {/* Forgot password link */}
        <p>
          <Link className='absolute sm:right-120 text-[#A16AE8]' to="/forgot">Forgot password?</Link>
        </p>

        {/* Login Button */}
        <button
          type="submit"
          className='bg-[#532F82] mt-15 rounded-md w-full h-[65px] shadow-lg text-white cursor-pointer'>
          Login
        </button>

        {/* Sign Up */}
        <p className='text-[#a3B1C7] text-center ml-8 mt-3 mb-40'>
          Don't have an account?
          <Link className='text-[#6a518f]' to="/signup"> Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
