import React from 'react';

export default function Business() {
  return (
    <div> 
      <div className="relative w-full h-[200px] bg-[#532F82] mt-6 flex items-center justify-center">
        <div className='block'>
      <h1 className="text-white lg:text-4xl font-bold z-10 text-center sm:text-3xl">Get in touch</h1>
      <p className='text-[#c8b0ce] '>We are here to support you throughout the process of getting your business listed.</p>
        </div>
     
    </div>
      

      <div className="max-w-[1200px] flex flex-col lg:flex-row justify-center  gap-10 relative z-10 ">
        {/* Business 1 */}
        <div className="p-4 bg-white h-[197px] w-full border-[#EEEEFF] rounded-md shadow-md">
          <div className="flex gap-2">
            <img src="/image/sms-tracking.svg" alt="Tracking icon" className="ml-6" />
            <p className="text-[#1E1E4B] font-bold text-2xl mt-2">Customer support</p>
          </div>
          <p className="text-center text-[#656565] text-xl mt-4">
            Please fill out the form below
          </p>
        </div>

        {/* Business 2 */}
        <div className="p-4 bg-white h-[197px] w-full border-[#EEEEFF] rounded-md shadow-md">
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

         <div className="p-4 bg-white h-[197px] w-full border-[#EEEEFF] rounded-md shadow-md">
          <div className="flex gap-2">
            <img src="/image/call-calling.png" alt="Tracking icon" className="ml-6" />
            <p className="text-[#1E1E4B] font-bold text-2xl mt-2">Phone number</p>
          </div>
          <p className="text-center text-[#656565] text-xl mt-4">
            +234 903 921 6724
          </p>
        </div>
      </div>


      <form className=' mt-15 gap-8 mx-auto max-w-[600px]' >
        <label className='text-[#603F8B] block text-[18px] '>Full name </label>
        <input type="text" className='w-full h-[64px]  mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] ' /> 
      
         <label className='text-[#603F8B] block text-[18px] mt-8  mr-6'>Email  </label>
        <input type="text" className='w-full h-[64px]  mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] ' /> 

         <label className='text-[#603F8B] block text-[18px] mt-8 '>Business type(Optional)  </label>
        <input type="text" className='w-full h-[64px]  mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] ' /> 

         <label className='text-[#603F8B] block text-[18px] mt-8 mr-4 '>Subject  </label>
        <select type="text" className='w-full h-[64px] mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] hover:text-gray-500 [&>option:hover]:bg-gray-400'> 
          <option value="" > Select Subject </option>
           <option value=""> This coulod be a subject </option>
           <option value=""> Might be another subject </option>
           <option value="">   i think you you know what this is </option>
           <option value=""> hiii </option>
           <option value=""> Sorry for the weird names , these weren't provided in the design
            </option>
          </select>

            <label className='text-[#603F8B] block text-[18px] mt-8 '>Write your message </label>
        <input type="text" className='w-full h-[131px]  mt-3 bg-[#F8FAFD] px-4 py-2 border-[#E7EAF1] rounded-lg focus:outline-none
        focus:ring-2 focus:ring-[#E7EAF1] ' /> 

         <button className='bg-[#532F82]  mb-40 mt-15 rounded-md  w-full h-[50px] lg:h-[78px] shadow-lg text-white cursor-pointer'>Send message</button>
      </form>
    </div>
  );
}
