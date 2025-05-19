import React from 'react'
import {Link} from 'react-router-dom'

export default function SentEmailPage(){
    return(
        <div>
            <img src="/image/Group 146.svg" alt="Sent-icon" className='ml-150 mt-25' />
            <p className='ml-120 mt-3 text-[#686868]'>An OTP code has been sent to segunsolaru@gmail.com. <br/>
               <span className='ml-20'>Check your email to get the code </span></p>
                <button className='bg-[#532F82] ml-112 mb-40  mt-8 rounded-md  w-[489px] h-[78px] shadow-lg text-white cursor-pointer'>
         <Link to="/confirm" >
            Next
            </Link>
             </button>
        </div>
    )
}