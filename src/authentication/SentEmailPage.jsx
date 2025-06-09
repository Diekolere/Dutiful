import React from 'react'
import {Link} from 'react-router-dom'

export default function SentEmailPage(){
    return(
        <div >
            <img src="/image/Group 146.svg" alt="Sent-icon" className='sm:ml-150 ml-25 mt-25' />
            <p className="pl-120 mt-3 text-[#686868] text-sm sm:text-base sm:inline-block text-center sm:text-left">
  An OTP code has been sent to segunsolaru@gmail.com. <br/>
  <span className="block sm:inline pl-14 text-center">Check your email to get the code.</span>
</p>
               <div className='mx-auto max-w-[500px] px-4'>
           <button className='bg-[#532F82]  mb-20  mt-8 rounded-md  w-full h-[60px] shadow-lg text-white cursor-pointer'>
          <Link to="/confirm" >
            Next
            </Link>
           </button>
        
               </div>
     
        </div>
    )
}