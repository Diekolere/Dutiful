import React from 'react'
import {Link} from 'react-router-dom'
import Eye from './Eye'
// import{Eye, EyeOff} from 'lucid-react'
// import{useState} from 'react'

export default function Login (){
    //  const loginPage = () =>{
    //     const[password, setPassword] = useState("");
    //     const[showPassword, setShowPassword] = useState(false);
    //  }

    return(
        <div>
            <p  className='mt-15 text-center mr-62 text-[#686868]'>Jump right back in</p>
            <p className='mt-3 text-center mr-75 font-bold text-[30px] text-[#1E1E4B]'>Login </p>

           <form>
               <label className='text-[#603F8B] block text-[18px] mt-6 text-center mr-80'>Email  </label>
        <input type="text" className='w-[486px] h-[60px] ml-125 mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] ' /> 
               
               <div className='relative'>
          <label className='text-[#603F8B] block text-[18px] mt-6 text-center mr-70'>Password </label>
       
               </div>
                <Eye />


            <p> 
                <Link className='absolute right-90 text-[#A16AE8]' to="/forgot" >Forgot password ?</Link>
                </p>  

                  <button className='bg-[#532F82] ml-125  mt-15 rounded-md  w-[486px] h-[78px] shadow-lg text-white cursor-pointer'>Login </button>
           
           <p className='text-[#a3B1C7] text-center ml-8 mt-3 mb-40'>Don't have an account? 
            <Link className=' text-[#6a518f] ' to="/signup" >Sign Up</Link>
           </p>
            </form>
        </div>
    )
}