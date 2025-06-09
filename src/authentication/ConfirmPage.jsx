import React, { useRef, useState } from 'react';
import{Link} from 'react-router-dom'
export default function PinInput() {
  const inputRefs = useRef([]);
  const [pin, setPin] = useState(['', '', '', '']);

  const handleChange = (e, index) => {
    const val = e.target.value;

    if (!/^\d?$/.test(val)) return; // Only digits, max one character

    const newPin = [...pin];
    newPin[index] = val;
    setPin(newPin);

    // Move focus to next input if value entered
    if (val && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (pin[index]) {
        // Clear the current box if it's not empty
        const newPin = [...pin];
        newPin[index] = '';
        setPin(newPin);
      } else if (index > 0) {
        // Go back to previous input
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div>
 <div className="flex gap-4 justify-center mt-40">
      {pin.map((digit, index) => (
        <input
          key={index}
          type="password"
          inputMode="numeric"
          maxLength="1"
          value={digit}
          ref={(el) => (inputRefs.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`max-w-[65px] w-full h-[69px] text-center bg-[#F3F3F3] text-2xl rounded-lg border  ${
            digit ? 'border-[#B6B6E5]' : 'border-[#B6B6E5]'
          } border-2 border-[#B6B6E5]`}
        />
      ))}
    </div>
         <p className=" sm:ml-101 lg:pl-30 mt-5 text-[#686868] text-sm sm:text-base sm:inline-block text-center sm:text-left">
  Enter OTP code that was sent to your email,<br/>
  <span className="block sm:inline lg:pl-12 "> segunsolaru@gmail.com.</span>
</p>

          
          <div className="max-w-[500px] mx-auto px-4 ">
               <button className='bg-[#532F82]  mt-8 rounded-md  w-full h-[65px] shadow-lg text-white cursor-pointer'>
         <Link to="/reset" >
            Confirm OTP
            </Link>
            </button>
          </div>
            

             <p className='text-[#a3B1C7] text-center ml-8 mt-3 mb-40'>Didn't get a code? 
                        <Link className=' text-[#6a518f]  ' to="/reset" >Resend</Link>
                       </p>
    </div>

   
  );
}
