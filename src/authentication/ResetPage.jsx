import React from 'react'
import Eye from './Eye'
import {Link} from 'react-router-dom'

export default function ResetPage(){
    return(
      <div>
         <p className='text-center sm:mr-57 sm:ml-115 mt-18 text-3xl text-[#1E1E4B] sm:inline-block '> Reset Password</p>
            <p className='text-center  mt-2 sm:mr-65 sm:ml-20 mb-4  text-base text-[#686868] sm-inline-block'>Set your new password 
            </p>

            <form className=' mx-auto max-w-[400px] gap-20 px-4'>
              <label className='text-[#603F8B]  text-[18px] mt-10 mb-4 text-center sm:mr-49'>Enter new password </label>
              <Eye />
               <label className='text-[#603F8B]  text-[18px] mt-15 sm:mr-43 text-center '>Re-enter new password  </label>
              
                 <Eye />
                   <button className='bg-[#532F82]   mt-20 rounded-md  w-full h-[78px] shadow-lg text-white cursor-pointer'>Reset Password </button>
          <p className='text-[#a3B1C7] text-center ml-15 mt-6 mb-40'>Or 
            <Link className=' text-[#6a518f] ml-2' to="/signup" >Create an account</Link>
           </p>
           </form>
         
    </div>
    )
    
}