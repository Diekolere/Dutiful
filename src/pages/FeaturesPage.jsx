import React from 'react'

export default function FeaturesPage () {
    return(
        <div className='mx-auto'>
            <div>
                <p className='font-semibold text-[#1E1E4B] text-center mt-4  text-3xl  lg:text-4xl'>Plans to Suit Your Business Budget</p>
             <p className='text-center font-base mt-3 text-[#1e1e4b]'>Our fully organized plans deliver valuable content that showcases your services and skills, drives <br />
                Lead, covers all features, and gives customers a clear idea to be able to choose your services.</p>
            </div>

      <div className="bg-[#FCFAFF] py-16 px-4 md:px-8 lg:px-12 mt-10">
  <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-stretch justify-center gap-8">

    {/* Card Wrapper */}
    {[
      {
        title: "Basic",
        price: "Free",
        features: [
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
        ]
      },
      {
        title: "Standard",
        price: "20,000 /year",
        features: [
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
        ]
      },
      {
        title: "Premium",
        price: "30,000 /year",
        features: [
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
        ]
      }
    ].map((plan, index) => (
      <div key={index} className="bg-white flex flex-col p-6 rounded-md shadow-md w-full max-w-sm mx-auto">
        <p className="mt-4 text-[#000000] font-bold">{plan.title}</p>
        <p className="text-[#000000] mt-3 text-4xl">{plan.price}</p>
        <button className="bg-[#532F82] rounded-md mt-4 w-full h-[60px] shadow-lg text-white text-lg font-semibold">
          Get Started
        </button>

        <div className="mt-6 space-y-4">
          {plan.features.map((text, i) => (
            <div className="flex" key={i}>
              <img src="/image/fi_check.png" alt="CheckMark" className="mt-1 w-5 h-5" />
              <p className="text-[#656565] ml-4 text-base">{text}</p>
            </div>
          ))}
        </div>
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