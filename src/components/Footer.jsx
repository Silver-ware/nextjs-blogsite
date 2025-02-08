// import React from 'react';
import Image from 'next/image'

function Footer() {
  return (
    <div className="bg-[#213555] w-full h-[425px] p-[10px] flex justify-center items-center">
      <div className="flex flex-col w-full h-full items-center justify-center p-[10px] gap-[25px]">
        <div className="p-[10px] h-max w-full flex justify-center items-center">
          <Image
            src="/logo.png"
            width={181.4}
            height={0}
            className='h-auto'
            alt="Logo Image"
          />
        </div>
        <div className='w-full h-max p-[10px] flex flex-col text-center gap-[10px] text-white'>
          <span className='font-normal text-base'>1234 Horizon Lane, Suite 500</span>
          <span className='font-normal text-base'>Brooklyn, NY 11201</span>
          <span className='font-normal text-base'>United States</span>
        </div>
        
        <div className='p-[10px] w-max h-max flex gap-[10px] items-center'>
          <div className="drop-shadow-[0px_4px_4px_#00000040] hover:scale-125 cursor-pointer">
            <Image src="/icons/gmail.png" width={19} height={0} className='h-auto w-auto' alt="Gmail Logo" />
          </div>
          <div className="drop-shadow-[0px_4px_4px_#00000040] hover:scale-125 cursor-pointer">
            <Image src="/icons/github.png" width={20} height={20} alt="Github Logo" />
          </div>
          <div className="drop-shadow-[0px_4px_4px_#00000040] hover:scale-125 cursor-pointer">
            <Image src="/icons/facebook.png" width={23} height={23} alt="Facebook Logo" />
          </div>
          <div className="drop-shadow-[0px_4px_4px_#00000040] hover:scale-125 cursor-pointer">
            <Image src="/icons/linkden.png" width={19} height={19} alt="LinkedIn Logo" />
          </div>
        </div>
      </div>
      <div className="flex w-full h-full p-[10px] gap-[10px] text-white">
        <div className="h-full w-max flex flex-col py-[104px] px-[63px]">
          <span className="text-[17px]">About Us</span>
          <span className="text-[17px]">Our Services</span>
          <span className="text-[17px]">Privacy Policy</span>
        </div>
        <div className="h-full w-max flex flex-col py-[104px] px-[63px]">
          <span className="text-[17px]">FAQ</span>
          <span className="text-[17px]">Community</span>
          <span className="text-[17px]">Preferences</span>
          <span className="text-[17px]">Get Started</span>
          <span className="text-[17px]">Alternate Program</span>
        </div>
        <div className="h-full w-max flex flex-col py-[104px] px-[63px]">
          <span className="text-[17px]">Home</span>
          <span className="text-[17px]">Blogs</span>
          <span className="text-[17px]">Category</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;