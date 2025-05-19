import React from 'react';

export default function Business() {
  return (
    <div>
      <img src="/image/Frame 5003.png" alt="" className="mt-10" />

      <div className="w-full flex justify-center mt-[-100px] gap-10 relative z-10">
        {/* Business 1 */}
        <div className="p-4 bg-white h-[197px] w-[413px] border-[#EEEEFF] rounded-md shadow-md">
          <div className="flex gap-2">
            <img src="/image/sms-tracking.svg" alt="Tracking icon" className="ml-6" />
            <p className="text-[#1E1E4B] font-bold text-2xl mt-2">Customer support</p>
          </div>
          <p className="text-center text-[#656565] text-xl mt-4">
            Please fill out the form below
          </p>
        </div>

        {/* Business 2 */}
        <div className="p-4 bg-white h-[197px] w-[413px] border-[#EEEEFF] rounded-md shadow-md">
          <div className="flex gap-2">
            <img src="/image/map.png" alt="Tracking icon" className="ml-6" />
            <p className="text-[#1E1E4B] font-bold text-2xl mt-2">Business address</p>
          </div>
          <p className="text-center text-[#656565] text-[18px] mt-4">
            Suites (C113 & C114) Akord Shopping Mall, <br />
             Bogije, Elemoro, 101001,<br />
              Lagos, Nigeria
          </p>
        </div>

         <div className="p-4 bg-white h-[197px] w-[413px] border-[#EEEEFF] rounded-md shadow-md">
          <div className="flex gap-2">
            <img src="/image/call-calling.png" alt="Tracking icon" className="ml-6" />
            <p className="text-[#1E1E4B] font-bold text-2xl mt-2">Phone number</p>
          </div>
          <p className="text-center text-[#656565] text-xl mt-4">
            +234 903 921 6724
          </p>
        </div>
      </div>

      <form className='text-center mr-110 mt-15 gap-8' >
        <label className='text-[#603F8B] block text-[18px] '>Full name </label>
        <input type="text" className='w-[600px] h-[64px] ml-105 mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] ' /> 
      
         <label className='text-[#603F8B] block text-[18px] mt-8  mr-6'>Email  </label>
        <input type="text" className='w-[600px] h-[64px] ml-105 mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] ' /> 

         <label className='text-[#603F8B] block text-[18px] mt-8 ml-30'>Business type(Optional)  </label>
        <input type="text" className='w-[600px] h-[64px] ml-105 mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] ' /> 

         <label className='text-[#603F8B] block text-[18px] mt-8 mr-4 '>Subject  </label>
        <select type="text" className='w-[600px] h-[64px] ml-105 mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] hover:text-gray-500 [&>option:hover]:bg-gray-400'> 
          <option value="" > Select Subject </option>
           <option value=""> This coulod be a subject </option>
           <option value=""> Might be another subject </option>
           <option value="">   i think you you know what this is </option>
           <option value=""> hiii </option>
           <option value=""> Sorry for the weird names , these weren't provided in the design
            </option>
          </select>

            <label className='text-[#603F8B] block text-[18px] mt-8 ml-25'>Write your message </label>
        <input type="text" className='w-[600px] h-[131px] ml-105 mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] ' /> 

         <button className='bg-[#532F82] ml-105 mb-40 mt-15 rounded-md mt-4 w-[600px] h-[78px] shadow-lg text-white cursor-pointer'>Send message</button>
      </form>
    </div>
  );
}
