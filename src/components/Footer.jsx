// import React from 'react';
import Image from 'next/image'

function Footer() {
  return (
    <div className="fixed bottom-0 bg-[#213555] w-full h-[425px] p-[10px] flex justify-center items-center">
      <div className="flex flex-col basis-1/2 h-full items-center justify-center p-[10px]">
        <div className="p-[10px] h-max w-full flex justify-center">
          <Image
            src="/logo.png"
            width={181.4}
            height={60}
            alt="Logo Image"
          />
        </div>
        <div className='w-full h-max p-[10px] flex flex-col text-center'>
          <span className='font-normal text-base'>1234 Horizon Lane, Suite 500</span>
          <span className='font-normal text-base'>Brooklyn, NY 11201</span>
          <span className='font-normal text-base'>United States</span>
        </div>
        
        <div className='p-[10px] w-max h-max flex gap-[10px] items-center'>
          <div className="drop-shadow-[0px_4px_4px_#00000040] hover:scale-125">
            <Image src="/icons/gmail.png" width={19} height={19} alt="Gmail Logo" />
          </div>
          <div className="drop-shadow-[0px_4px_4px_#00000040] hover:scale-125">
            <Image src="/icons/github.png" width={20} height={20} alt="Github Logo" />
          </div>
          <div className="drop-shadow-[0px_4px_4px_#00000040] hover:scale-125">
            <Image src="/icons/facebook.png" width={23} height={23} alt="Facebook Logo" />
          </div>
          <div className="drop-shadow-[0px_4px_4px_#00000040] hover:scale-125">
            <Image src="/icons/linkden.png" width={19} height={19} alt="LinkedIn Logo" />
          </div>
        </div>
      </div>
      <div className="flex basis-1/2 h-full justify-center">
        <div className="basis-1/3 h-full flex flex-col items-center justify-center">
          <div className='w-max flex flex-col gap-[10px]'>
            <span className="text-[17px]">About Us</span>
            <span className="text-[17px]">Our Services</span>
            <span className="text-[17px]">Privacy Policy</span>
          </div>
        </div>
        <div className="basis-1/3 h-full flex flex-col items-center justify-center">
          <div className='w-max flex flex-col gap-[10px]'>
            <span className="text-[17px]">FAQ</span>
            <span className="text-[17px]">Community</span>
            <span className="text-[17px]">Preferences</span>
            <span className="text-[17px]">Get Started</span>
            <span className="text-[17px]">Alternate Program</span>
          </div>
        </div>
        <div className="basis-1/3 h-full flex flex-col items-center justify-center">
          <div className='w-max flex flex-col gap-[10px]'>
            <span className="text-[17px]">Home</span>
            <span className="text-[17px]">Blogs</span>
            <span className="text-[17px]">Category</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;