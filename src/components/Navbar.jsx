import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="bg-white flex gap-25">
      <img src="/image/Group 65.png" alt="Dutiful Logo" className='ml-12 mt-4' />
      <img src="/image/Search.png" alt="Searcg-icon" className='h-[40px] mt-6 ' />
      <ul className='flex gap-20 mt-8 text-base text-[#686868] font-bold'>
        <Link to='/business'>Business Directory </Link>
        <Link to='/feature'>Features</Link>
        <Link to="/feature">Pricing</Link>
        <Link to='/home'>Blog</Link>
      </ul>
       <ul className='flex gap-15'>
        <li className='mt-8 text-[#1E1E4B] font-bold'><Link to="/login">Login </Link> </li>
        <button className='border-[#603F8B] border-2 mt-4 w-[174px] h-[59px] text-[#603F8B] cursor-pointer  hover:text-white font-bold text-center px-2 rounded-md hover:bg-[#603F8B]'>
         <Link to="/signup">
          Sign up
         </Link>
         
          </button>
       </ul>
    
      
    </div>
  );
}
