import React from 'react'

export default function FeaturesPage () {
    return(
        <div>
            <div>
                <p className='font-semibold text-[#1E1E4B] text-center mt-8  text-4xl lg:text-4xl'>Plans to Suit Your Business Budget</p>
             <p className='text-center font-base mt-3 text-[#1e1e4b]'>Our fully organized plans deliver valuable content that showcases your services and skills, drives <br />
                Lead, covers all features, and gives customers a clear idea to be able to choose your services.</p>
            </div>

<div className='flex flex-col lg:flex-row items-center justify-center py-16 px-6 md:px-2 bg-[#FCFAFF] mt-10 gap-y-8 lg:gap-x-6'>
  
  {/* Feature 1 */}
  <div className="flex flex-col items-start p-4 bg-white w-[413px] h-[1200px]">
    <p className='mt-10 text-[#000000] font-bold'>Basic</p>
    <p className='text-[#000000] mt-3 text-4xl'>Free</p>
    <button className='bg-[#532F82] rounded-md mt-4 w-[374px] h-[78px] shadow-lg text-white cursor-pointer'>Get Started</button>

    {[
      "Access to dashboard",
      "Add up to 2 businesses",
      "Add up to 2 products/services",
      "Add up to 2 Images",
      "Unlimited Keywords",
      "Display service hours and prices",
      "Display address, contant, email",
      "Instant chat",
      "Reviews and ratings",
      "Profile visibility",
      "Instant notification",
      "Display website and social network",
      "Quotes",
      "Bookmarks"
    ].map((text, index) => (
      <div className='flex' key={index}>
        <img src="/image/fi_check.png" alt="CheckMark" className='mt-4' />
        <p className='text-[#656565] ml-8 mt-4 text-xl'>{text}</p>
      </div>
    ))}
  </div>

  {/* Feature 2 */}
  <div className="flex flex-col items-start p-4 bg-white w-[413px] h-[1200px]">
    <p className='mt-10 text-[#000000] font-bold'>Standard</p>
    <div className='flex gap-2'>
      <p className='mt-2 font-bold'>NGN</p>
      <p className='text-[#000000] text-4xl text-center'>20,000 <span className='text-xl font-bold'>/year</span></p>
    </div>
    <button className='bg-[#532F82] rounded-md mt-4 w-[374px] h-[78px] shadow-lg text-white cursor-pointer'>Get Started</button>

    {[
      "Access to dashboard",
      "Add up to 6 businesses",
      "Add up to 6 products/services",
      "Add up to 4 Images",
      "Unlimited Keywords",
      "Display service hours and prices",
      "Display address, contant, email",
      "Instant chat",
      "Reviews and ratings",
      "Profile visibility",
      "Instant notification",
      "Display website and social network",
      "Quotes",
      "Bookmarks",
      "Number of profile views",
      "Verify badge(purple)",
      "Accept & Sell appointment",
      "Lastest Offers"
    ].map((text, index) => (
      <div className='flex' key={index}>
        <img src="/image/fi_check.png" alt="CheckMark" className='mt-4' />
        <p className='text-[#656565] ml-8 mt-4 text-xl'>{text}</p>
      </div>
    ))}
  </div>

  {/* Feature 3 */}
  <div className="flex flex-col items-start p-4 bg-white w-[413px] h-[1200px]">
    <p className='mt-10 text-[#000000] font-bold'>Premium</p>
    <div className='flex gap-2'>
      <p className='mt-2 font-bold'>NGN</p>
      <p className='text-[#000000] text-4xl text-center'>30,000 <span className='text-xl font-bold'>/year</span></p>
    </div>
    <button className='bg-[#532F82] rounded-md mt-4 w-[374px] h-[78px] shadow-lg text-white cursor-pointer'>Get Started</button>

    {[
      "Access to dashboard",
      "Add up to 10 businesses",
      "Add up to 10 products/services",
      "Add up to 6 Images",
      "Unlimited Keywords",
      "Display service hours and prices",
      "Display address, contant, email",
      "Instant chat",
      "Reviews and ratings",
      "Profile visibility",
      "Instant notification",
      "Display website and social network",
      "Quotes",
      "Bookmarks",
      "Number of profile views",
      "Verify badge(gold)",
      "Accept & Sell appointment",
      "Lastest Offers",
      "24/7 Service and support"
    ].map((text, index) => (
      <div className='flex' key={index}>
        <img src="/image/fi_check.png" alt="CheckMark" className='mt-4' />
        <p className='text-[#656565] ml-8 mt-4 text-xl'>{text}</p>
      </div>
    ))}
  </div>

</div>

  <div>
    <img src='/image/Frame 544.png ' alt='Overview' />
    </div>

        </div>
    )
}