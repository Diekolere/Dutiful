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
      isActive ? 'border-purple-600 bg-purple-100 text-purple-700  h-[80px] rounded-md w-[200px]' : 'border-gray-300 bg-white text-gray-500  h-[80px] rounded-md sm:w-[200px]'
    }`;
  };

  return (
    <div className=" items-center justify-center bg-white ">
      <div className="max-w-md mx-auto  gap-10">
        <div className=" flex flex-col w-full justify-center items-center gap-2 pt-15">
  <p className="text-sm text-[#686868] pr-70 ">Sign up for free!</p>
  <h2 className="text-3xl text-[#1E1E4B] pr-65 mb-3">Get started</h2>
</div>

        {/* Toggle Buttons */}
        <div className="flex flex-col lg:flex-row  gap-8  mt-4  mx-auto mb-4 lg:w-[600px] w-[150px]">
          <button
            onClick={() => setSelectedUser('regular')}
            className={getButtonClasses('regular')}
          >
            <FaUser /> Regular user
            {selectedUser === 'regular' && (
              <span className="absolute left-46 mb-16 transform rounded-4xl  -translate-y-1/2 bg-[#532F82] text-white">
                <FiCheck size={30} />
              </span>
            )}
          </button>

          <button
            onClick={() => setSelectedUser('provider')}
            className={getButtonClasses('provider')}
          >
            <FaStore /> Service provider
            {selectedUser === 'provider' && (
              <span className="absolute left-46 mb-16 transform rounded-3xl  -translate-y-1/2 bg-[#532F82] text-white">
                <FiCheck size={30} />
              </span>
            )}
          </button>
        </div>
      </div>
         <form className=' mx-auto max-w-[600px] px-10  py-10 '>
                <label className='text-[#603F8B]  text-[18px] mt-15 text-center sm:mr-190  '>Full name  </label>
        <input type="text" className='w-full h-[60px]  mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        border-2 ' /> 
               <label className='text-[#603F8B]  text-[18px] mt-3 text-center sm:mr-189 '>Email  </label>
        <input type="text" className='w-full h-[60px]  mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        border-2 ' /> 

         <label className='text-[#603F8B]  text-[18px] mt-3 text-center sm:not-last:sm:mr-169 '>Phone number  </label>
        <input type="text" className='w-full h-[60px]  mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        border-2 ' /> 
               
               <div className='relative'>
                <label className='text-[#603F8B] text-[18px] mt-3 text-center sm:mr-180 '>Password </label>
       
               </div>
               <Eye2 />
               <div className='relative'>
                <label className='text-[#603F8B] text-[18px] mt-4 text-center '>Re-enter Password </label>
       
               </div>
                <Eye2 />
                 </form>

                  <label className="flex items-center space-x-2 cursor-pointer px-10  py-10 ">
      <input
        type="checkbox"
        checked={agreed}
        onChange={() => setAgreed(!agreed)}
        className="sm:ml-99 mb-0 mt-0 appearance-none w-4 h-4 border-2 border-[#A16AE8]  cursor-pointer rounded-sm checked:text-black checked:border-black focus:outline-none relative"
      />
      <span className="text-sm text-gray-700 mt-0">
        I agree to Dutiful’s{' '}
        <a href="#" className="text-purple-500 underline hover:text-purple-600">
          terms and conditions
        </a>
      </span>
    </label>
      <div className='mx-auto max-w-[590px] pl-7 pr-7'>
     <button className='bg-[#532F82]  rounded-md  w-full h-[72px] shadow-lg text-white cursor-pointer '>Sign Up </button>
      </div>
    
           
           <p className='text-[#a3B1C7] text-center mr-20 mt-6 mb-20 py-10  '>Already have an account? 
            <Link className=' text-[#6a518f] ' to="/login" >Login</Link>
           </p>

        
    </div>
  );
}
