import React, { useState } from 'react';
import { FaUser, FaStore } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import Eye2 from './Eye2'
import {Link} from 'react-router-dom'


export default function SignUpForm() {
  const [selectedUser, setSelectedUser] = useState('regular');
   const [agreed, setAgreed] = useState(false);

  const getButtonClasses = (type) => {
    const isActive = selectedUser === type;
    return `relative flex items-center gap-2 px-4 py-2 border  font-medium transition duration-200  ${
      isActive ? 'border-purple-600 bg-purple-100 text-purple-700  h-[80px] rounded-md ' : 'border-gray-300 bg-white text-gray-500  h-[80px] rounded-md'
    }`;
  };

  return (
    <div className=" items-center justify-center bg-white ">
      <div className="max-w-md w-full gap-10">
        <p className="text-sm text-[#686868] text-center pt-15 ml-50 ">Sign up for free!</p>
        <h2 className="text-3xl text-center ml-60 text-[#1E1E4B]">Get started</h2>
 
        {/* Toggle Buttons */}
        <div className="flex  gap-5 mt-4 ml-69  w-[900px]">
          <button
            onClick={() => setSelectedUser('regular')}
            className={getButtonClasses('regular')}
          >
            <FaUser /> Regular user
            {selectedUser === 'regular' && (
              <span className="absolute left-34 mb-18 transform rounded-3xl  -translate-y-1/2 bg-[#532F82] text-white">
                <FiCheck size={18} />
              </span>
            )}
          </button>

          <button
            onClick={() => setSelectedUser('provider')}
            className={getButtonClasses('provider')}
          >
            <FaStore /> Service provider
            {selectedUser === 'provider' && (
              <span className="absolute left-41 mb-18 transform rounded-3xl  -translate-y-1/2 bg-[#532F82] text-white">
                <FiCheck size={20} />
              </span>
            )}
          </button>
        </div>
      </div>
         <form>
                <label className='text-[#603F8B] block text-[18px] mt-15 text-center mr-180 '>Full name  </label>
        <input type="text" className='w-[486px] h-[60px]  mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] ml-69 ' /> 
               <label className='text-[#603F8B] block text-[18px] mt-3 text-center mr-189 '>Email  </label>
        <input type="text" className='w-[486px] h-[60px]  mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] ml-69 ' /> 

         <label className='text-[#603F8B] block text-[18px] mt-3 text-center mr-169 '>Phone number  </label>
        <input type="text" className='w-[486px] h-[60px]  mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] ml-69 ' /> 
               
               <div className='relative'>
                <label className='text-[#603F8B] block text-[18px] mt-3 text-center mr-180 '>Password </label>
       
               </div>
                <Eye2 />

                  <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={agreed}
        onChange={() => setAgreed(!agreed)}
        className="ml-69 mt-4  appearance-none w-4 h-4 border-2 border-[#A16AE8]  cursor-pointer rounded-sm checked:text-black checked:border-black focus:outline-none relative"
      />
      <span className="text-sm text-gray-700 mt-4">
        I agree to Dutiful’s{' '}
        <a href="#" className="text-purple-500 underline hover:text-purple-600">
          terms and conditions
        </a>
      </span>
    </label>

      <button className='bg-[#532F82] ml-69  mt-15 rounded-md  w-[486px] h-[78px] shadow-lg text-white cursor-pointer'>Sign Up </button>
           
           <p className='text-[#a3B1C7] text-center mr-75 mt-6 mb-40'>Already have an account? 
            <Link className=' text-[#6a518f] ' to="/login" >Login</Link>
           </p>

         </form>
    </div>
  );
}
