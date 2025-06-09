import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Eye = ({ password, setPassword, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative mx-auto max-w-[600px]'>
      <input
        type={showPassword ? 'text' : 'password'}
       className='w-full h-[60px] lg:ml-15 mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        border-2 ' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      <span
        onClick={() => setShowPassword(prev => !prev)}
         className='absolute right-0 top-1/2 pl-30 -translate-y cursor-pointer text-[#A16AE8] hover:text-gray-700'
      
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
};

export default Eye;
