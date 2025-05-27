import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError('Email is required');
    } else if (!emailPattern.test(email)) {
      setError('Enter a valid email');
    } else {
      setError('');
      navigate('/sent'); // Only navigate if validation passes
    }
  };

  return (
    <div>
      <p className='text-center sm:mr-57  mr-20 mt-18 text-3xl text-[#1E1E4B] '>Forgot Password</p>
     <p className="text-center mt-2 sm:ml-113 text-[#686868] sm:text-base text-sm sm:whitespace-normal whitespace-pre-line sm:inline">
  Enter your email and we’ll send you a mail on how to reset your password.
</p>
      <form className='mx-auto w-full max-w-[500px] px-4' onSubmit={handleSubmit}>
        <label className='text-[#603F8B] block text-[18px] mt-10 text-center mr-99'>Email</label>
        <div className="relative h-[60px] mt-3">
          <img
            src="/image/Message.png"
            alt="Message Icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 w-6 h-6"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full h-full bg-[#F8FAFD] px-4 pr-12 py-2 border border-[#E7EAF1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7EAF1]'
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <button
          type="submit"
          className='bg-[#532F82] mt-8 rounded-md w-full h-[78px] shadow-lg text-white cursor-pointer'
        >
          Send email
        </button>

        <p className='text-[#a3B1C7] text-center ml-8 mt-3 mb-40'>Or
          <Link className='text-[#6a518f] ml-2' to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
