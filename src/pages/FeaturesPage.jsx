import React from 'react'

export default function FeaturesPage () {
    return(
        <div>
            <div>
                <p className='font-semibold text-[#1E1E4B] text-center mt-8 text-4xl'>Plans to Suit Your Business Budget</p>
             <p className='text-center font-base mt-3 text-[#656565]'>Our fully organized plans deliver valuable content that showcases your services and skills, drives <br />
                Lead, covers all features, and gives customers a clear idea to be able to choose your services.</p>
            </div>

<div className='flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-2 bg-[#FCFAFF] mt-10'>
    <div className="w-full  mt-10 md:mt-0   flex">
        {/* Feature 1 */}
        <div className="items-start  p-4 mr-20 bg-white w-[413px] h-[1200px] ">
          <div >
           <p className='mt-10 text-[#000000] font-bold ' >Basic</p>
            <p className='text-[#000000] mt-3 text-4xl'>Free</p>
            <button className='bg-[#532F82]  rounded-md mt-4 w-[374px] h-[78px] shadow-lg text-white cursor-pointer'>Get Started</button>
           {/* checkmark and others */}
            <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-8 '/>
            <p className='text-[#656565] ml-8 mt-8 text-xl'>Access to dashboard</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Add up to 2 businesses</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Add up to 2 products/services</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Add up to 2 Images</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Unlimited Keywords</p>
            </div>
            <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Display service hours and prices</p>
            </div>
              <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Display address, contant, email</p>
            </div>
               <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Instant chat</p>
            </div>
               <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Reviews and ratings</p>
            </div>
               <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Profile visibility</p>
            </div>
              <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Instant notification</p>
            </div>
              <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Display website and social network</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Quotes</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Bookmarks</p>
            </div>
          </div>
        </div>

        {/* Features2 */}
        <div className="items-start gap-4  p-4 mr-20 bg-white w-[413px] h-[1200px] absolute left-120 ">
          <div >
           <p className='mt-10 text-[#000000] font-bold ' >Standard</p>
           <div className='flex gap-2'>
             <p className='mt-2 font-bold '>NGN</p>
            <p className='text-[#000000]  text-4xl text-center'>20,000 <span className='text-xl font-bold'>/year</span></p>
           </div>
            <button className='bg-[#532F82]  rounded-md mt-4 w-[374px] h-[78px] shadow-lg text-white cursor-pointer'>Get Started</button>
           {/* checkmark and others */}
            <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-8 '/>
            <p className='text-[#656565] ml-8 mt-8 text-xl'>Access to dashboard</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Add up to 6 businesses</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Add up to 6 products/services</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Add up to 4 Images</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Unlimited Keywords</p>
            </div>
            <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Display service hours and prices</p>
            </div>
              <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Display address, contant, email</p>
            </div>
               <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Instant chat</p>
            </div>
               <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Reviews and ratings</p>
            </div>
               <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Profile visibility</p>
            </div>
              <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Instant notification</p>
            </div>
              <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Display website and social network</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Quotes</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Bookmarks</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Number of profile views</p>
            </div>
              <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Verify badge(purple)</p>
            </div>
              <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Accept & Sell appointment</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Lastest Offers</p>
            </div>
          </div>
        </div>

                {/* Features3 */}
        <div className="items-start gap-4  p-4 mr-20 bg-white w-[413px] h-[1200px] absolute left-232 ">
          <div >
           <p className='mt-10 text-[#000000] font-bold' >Premium</p>
           <div className='flex gap-2'>
             <p className='mt-2 font-bold '>NGN</p>
            <p className='text-[#000000]  text-4xl text-center'>30,000 <span className='text-xl font-bold'>/year</span></p>
           </div>
            <button className='bg-[#532F82]  rounded-md mt-4 w-[374px] h-[78px] shadow-lg text-white cursor-pointer'>Get Started</button>
           {/* checkmark and others */}
            <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-8 '/>
            <p className='text-[#656565] ml-8 mt-8 text-xl'>Access to dashboard</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Add up to 10 businesses</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Add up to 10 products/services</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Add up to 6 Images</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Unlimited Keywords</p>
            </div>
            <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Display service hours and prices</p>
            </div>
              <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Display address, contant, email</p>
            </div>
               <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Instant chat</p>
            </div>
               <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Reviews and ratings</p>
            </div>
               <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Profile visibility</p>
            </div>
              <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Instant notification</p>
            </div>
              <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Display website and social network</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Quotes</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Bookmarks</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Number of profile views</p>
            </div>
              <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Verify badge(gold)</p>
            </div>
              <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Accept & Sell appointment</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>Lastest Offers</p>
            </div>
             <div className='flex'>
            <img src="/image/fi_check.png" alt="CheckMark"  className='mt-4 '/>
            <p className='text-[#656565] ml-8 mt-4 text-xl'>24/7 Service and support</p>
            </div>
          </div>
        </div>
</div>
</div>
  
  <div>
    <img src='/image/Frame 544.png ' alt='Overview'/>
    </div>

        </div>
    )
}