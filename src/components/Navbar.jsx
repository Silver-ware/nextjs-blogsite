// import React from 'react';
import Image from 'next/image'

function Navbar(props) {
  return (

    <div className="w-full bg-[#ffffff57] border-b border-b-white h-max text-white pt-[25px] px-9 pb-[20px] fixed
      flex gap-[70px] item-center justify-center">
      <h1 className="text-[57px] font-semibold tracking-tight leading-[64px]">BLOGFIX</h1>
      <ul className="flex flex-1 min-w-[500px] px-[38px] gap-[25px] justify-end">
        <li className="border-b-[3px] border-[#050D1B]
          p-[10px] flex items-center text-[28px] font-semibold text-white">Home</li>
        <li className="border-b-[3px] border-[#D8C4B6BF]
          p-[10px] flex items-center text-[28px] font-semibold text-[#FFFFFF80]">Blog</li>
        <li className="border-b-[3px] border-[#D8C4B6BF]
          p-[10px] flex items-center text-[28px] font-semibold text-[#FFFFFF80]">Create</li>
      </ul>
        <Image
          src="/Login.png"
          width={50}
          height={50}
          className='h-[50px]'
          alt="Login Button"
        />
    </div>
  );
}

export default Navbar;