import React from 'react'
import Eye from './Eye'
import {Link} from 'react-router-dom'

export default function ResetPage(){
    return(
      <div>
         <p className='text-center sm:mr-57 sm:ml-115 mt-18 text-3xl text-[#1E1E4B] sm:inline-block font-bold'> Reset Password</p>
            <p className='text-center  mt-2 sm:mr-80 sm:ml-20 mb-4  text-base text-[#686868] sm-inline-block'>Set your new password 
            </p>

            <form className=' mx-auto max-w-[550px] gap-25 px-4'>
              <label className='text-[#603F8B]  text-[18px] mt-10 mb-4 text-center lg:pl-14'>Enter new password </label>
              <Eye />
               <label className='text-[#603F8B]  text-[18px] mt-22 lg:pl-14  sm:mr-43 text-center '>Re-enter new password  </label>
              
                 <Eye />
                 </form>
                 <div className='lg:ml-118 max-w-[530px] mx-auto'>
                  <button className='bg-[#532F82]   mt-20 rounded-md  w-full h-[65px] shadow-lg text-white cursor-pointer'>Reset Password </button>
                 </div>
          <p className='text-[#a3B1C7] text-center ml-15 mt-6 mb-20'>Or 
            <Link className=' text-[#6a518f] ml-2' to="/signup" >Create an account</Link>
           </p>
         
    </div>
    )
    
}