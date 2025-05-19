import React from 'react'
import { FiMail } from 'react-icons/fi';
import {Link} from 'react-router-dom'

export default function ForgotPage(){
    return(
        <div>
            <p className='text-center mr-57 mt-18 text-3xl text-[#1E1E4B] '> Forgot Password</p>
            <p className='text-center  mt-2 text-base text-[#686868]'>Enter your email and well send you a mail on how to reset your <br/>
           <span className='mr-93 text-[#686868]'> password.</span> </p>

            <form>
            
               <label className='text-[#603F8B] block text-[18px] mt-10 text-center mr-99'>Email  </label>
                 <div className="relative w-[486px] h-[60px] ml-115 mt-3">
          {/* icon image */}
          <img
            src="/image/Message.png" 
            alt="Message Icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-6 h-6"
          />

          {/* Input field */}
          <input
            type="text"
            className='w-[486px] h-full bg-[#F8FAFD] px-4 pr-12 py-2 border border-[#E7EAF1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7EAF1]'
          />
        </div>
    
           <button className='bg-[#532F82] ml-115  mt-8 rounded-md  w-[489px] h-[78px] shadow-lg text-white cursor-pointer'>
         <Link to="/sent">
            Send email
            </Link>
             </button>
             <p className='text-[#a3B1C7] text-center ml-8 mt-3 mb-40 '>Or 
            <Link className=' text-[#6a518f] ml-2 '   to="/login">Login</Link>
           </p>
               </form>
        </div>
    )
}