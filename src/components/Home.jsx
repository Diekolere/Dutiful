import React from 'react'

export default function Home(){
    return(
        <div>
          <div className='flex gap-20'>
         < div className='mt-50 ml-18 gap-15' >
        <p className='font-semibold text-3xl text-[#230B34]'>List and grow your business <br />
            with just few clicks</p>
         <p className='mt-3 text-[#383838]'> Eliminate manual work and save time by listing your business <br />
             or service on the best business directory in Nigeria.
        </p>   
         </div>
         <img src="/image/Group 698.svg" alt="Blogger" className='w-[674px] h-[563px] mt-10' />
        </div>

       {/* the next image part */}
          <div className='flex'>
            <img src="/image/Group 5018.svg" alt="" className='w-[592.87px] h-[579.5px]' />
            <div  >
            <p className='mt-50 ml-22 gap-15 font-semibold text-[#1E1E4B] text-4xl' > 
                Collect reviews and ratings <br />
                 from customers
            </p>
            <p className='ml-22 mt-2 text-[#656565]'>
                Accelerate your business reputation by 90% and gain social <br />
                 proof through reviews and ratings requested from customers.
            </p>
            </div>
          </div>

          {/* The third part */}
           <div className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-2 bg-[#FCFAFF]">
      {/* Left Side (Image Placeholder) */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="bg-[#532F82] rounded-[30px] w-[638px] h-[441px]  flex items-center justify-center shadow-lg">
          {/* Replace with actual image */}
          
            <img src="/image/Listing mockup 1.png" alt="Phone"  className='w-[1291.08px] h-[622px]'/>
          
        </div>
      </div>

      {/* Right Side (Features) */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:ml-4 space-y-8">
        {/* Feature 1 */}
        <div className="items-start gap-4 border-[#EEEEFF] border-2 rounded-3xl p-4 mr-20 bg-white">
            <img src="/image/discover.png" alt="" />
          <div>
            <h3 className="text-lg font-semibold text-[#464646]">Get Discovered</h3>
            <p className="text-sm text-[#464646]">
              Dutiful is more than just a business directory; it also enhances your web profile.
              The platform makes use of SEO techniques to boost each listing’s performance
              on the SERPs, providing any business the chance to rank, regardless of how strong
              their current online presence is.
            </p>
          </div>
        </div>
    
        {/* Feature 2 */}
          <div className=" items-start gap-4 border-[#EEEEFF] border-2 rounded-3xl p-4 mr-20 absolute left-140 bg-white w-[480px]">
          <img src="/image/messages.png" alt="" />
          <div>
            <h3 className="text-lg font-semibold text-[#464646]">Instant Chat</h3>
            <p className="text-sm text-[#464646]">
              You’ll be able to chat and send voice recordings with potential and existing
              customers, including managing your captured leads anytime, anywhere via the platform.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="items-start gap-4 border-[#EEEEFF] border-2 rounded-3xl p-4 mr-20 bg-white mt-60">
         <img src="/image/note-2.png" alt="" />
          <div>
            <h3 className="text-lg font-semibold text-[#464646]">Quotations</h3>
            <p className="text-sm text-gray-[#464646]">
              In addition to providing customers with access to information, offering customer
              quotations is very advantageous to the way you conduct your business. On Dutiful,
              you’ll be able to send and receive quotes from customers—an important step in lead
              management.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* the last image section */}
        <div className='flex'>
            <img src="/image/Frame 5018.svg" alt="" className='w-[521px] h-[477px] ml-20 mt-20' />
            <div  >
            <p className='mt-50 ml-22 gap-15 font-semibold text-[#1E1E4B] text-4xl' > 
                Accept and sell appointments
            </p>
            <p className='ml-22 mt-2 text-[#656565]'>
                Let customers book their own appointment or consultation.<br />
                 Start accepting payments for appointments through <br />
                  your booking page.
            </p>
            </div>
          </div>
        </div>
       
        

    );
}