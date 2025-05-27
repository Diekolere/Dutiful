import React from 'react'
import {Link} from 'react-router-dom'

export default function SentEmailPage(){
    return(
        <div >
            <img src="/image/Group 146.svg" alt="Sent-icon" className='sm:ml-150 ml-25 mt-25' />
            <p className="sm:ml-96 mt-3 text-[#686868] text-sm sm:text-base sm:inline-block text-center sm:text-left">
  An OTP code has been sent to segunsolaru@gmail.com. 
  <span className="block sm:inline">Check your email to get the code.</span>
</p>
               <div className='mx-auto max-w-[600px] px-4'>
           <button className='bg-[#532F82]  mb-40  mt-8 rounded-md  w-full h-[65px] shadow-lg text-white cursor-pointer'>
          <Link to="/confirm" >
            Next
            </Link>
           </button>
        
               </div>
     
        </div>
    )
}