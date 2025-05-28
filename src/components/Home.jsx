import React from 'react'

export default function Home(){
    return(
        <div  >
            <div className='flex flex-col lg:flex-row gap-15 '>
      < div className=' sm:mt-50 mt-8 sm:ml-18 gap-15 px-4 ' >
        <p className='font-semibold text-3xl  text-[#230B34]'>List and grow your business <br />
            with just few clicks</p>
         <p className='mt-3  text-[#383838]'> Eliminate manual work and save time by listing your business <br />
             or service on the best business directory in Nigeria.
        </p>   
         </div>
         <div className='px-4 lg:px-0'>
      <img src="/image/Group 698.svg" alt="Blogger" className=' md:w-[267px] lg:w-[674px] h-[563px] md:-mt-0 -mt-25' />
         </div>
        
        </div>  

       
          <div className='flex flex-col-reverse lg:flex-row '>
            <img src="/image/Group 5018.svg" alt="" className='w-[592.87px] h-[579.5px]' />
           <div  className='px-4' >
            <p className='lg:mt-50 sm:ml-22 sm:text-3xl  text-2xl font-semibold text-[#1E1E4B]lg:text-4xl' > 
               <span className="block lg:inline">Collect reviews and ratings</span> <br className="hidden lg:inline" />
              <span className="block lg:inline">from customers</span>    
            </p>
            <p className='sm:ml-22 mt-2 text-[#656565] '>
              <span className="block lg:inline">Accelerate your business reputation by 90% and gain social </span><br className='hidden lg:inline' />
             <span classNmae='block lg:inline'>  proof through reviews and ratings requested</span><br className='hidden lg:inline' />
                <span className='block lg:inline'> from customers.</span>
            </p>
            </div> 
          </div>
      

           
          <div className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-2 bg-[#FCFAFF]">
  
  <div className="w-full flex justify-center relative px-4  lg:px-6">
    <div className="bg-[#532F82] rounded-[30px] h-[300px] mb-3 lg:w-[638px] lg:h-[441px] flex items-center justify-center shadow-lg">
      <img src="/image/Listing mockup 1.png" alt="Phone" className="lg:w-[1291.08px] w-[600px] h-[401px] lg:h-[622px]" />
    </div>
  </div> 

  <div className="w-full flex-col md:ml-4 space-y-8 z-[50]">
    <div className="items-start gap-4 border-[#EEEEFF] border-2 rounded-3xl p-4 bg-white max-w-[480px]">
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

    <div className="items-start gap-4 border-[#EEEEFF] border-2 rounded-3xl p-4 bg-white max-w-[480px] lg:-ml-20">
      <img src="/image/messages.png" alt="" />
      <div>
        <h3 className="text-lg font-semibold text-[#464646]">Instant Chat</h3>
        <p className="text-sm text-[#464646]">
          You’ll be able to chat and send voice recordings with potential and existing
          customers, including managing your captured leads anytime, anywhere via the platform.
        </p>
      </div>
    </div>

    <div className="items-start gap-4 border-[#EEEEFF] border-2 rounded-3xl p-4 bg-white max-w-[480px]">
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

    
        <div className='flex flex-col-reverse lg:flex-row'>
  <div className="px-4 lg:px-0  w-full">
    <img src="/image/Frame 5018.svg" alt="" className='w-full h-[477px] lg:mt-20 mt-0' />
  </div>

  <div>
    <p className='lg:mt-50 mt-0  gap-15 font-semibold text-[#1E1E4B] text-4xl ml-3'>
      Accept and sell appointments
    </p>
    <p className='ml-1 mt-2 text-[#656565]'>
      Let customers book their own appointment or consultation.<br />
      Start accepting payments for appointments through <br />
      your booking page.
    </p>
  </div>
</div>

</div>
        

    );
}