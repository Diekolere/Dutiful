import React from 'react'
import Eye from './Eye'
import {Link} from 'react-router-dom'

export default function ResetPage(){
    return(
      <div>
         <p className='text-center mr-57 mt-18 text-3xl text-[#1E1E4B] '> Reset Password</p>
            <p className='text-center  mt-2 mr-65 text-base text-[#686868]'>Set your new password <br/>
            </p>

            <form>
              <label className='text-[#603F8B] block text-[18px] mt-10 text-center mr-49'>Enter new password </label>
              <Eye />
               <label className='text-[#603F8B] block text-[18px] mt-5 mr-43 text-center '>Re-enter new password  </label>
              
                 <Eye />
          
           </form>
              <button className='bg-[#532F82] ml-125  mt-20 rounded-md  w-[486px] h-[78px] shadow-lg text-white cursor-pointer'>Reset Password </button>
          <p className='text-[#a3B1C7] text-center ml-25 mt-6 mb-40'>Or 
            <Link className=' text-[#6a518f] ml-2' to="/signup" >Create an account</Link>
           </p>
    </div>
    )
    
}