// import React from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image'

function Navbar(props) {
  const navbarRoute = useRouter();

  const navigateTo = (path) => {
    navbarRoute.push(path);
  }
  return (

    <div className="w-full bg-[#213555] bg-opacity-[49%] h-max text-white pt-[25px] px-9 pb-[20px] fixed
      flex gap-[70px] item-center justify-center">
      <h1 className="text-[57px] font-semibold tracking-tight leading-[64px]">BLOGFIX</h1>
      <ul className="flex flex-1 min-w-[500px] px-[38px] gap-[25px] justify-end">
        <li className="border-b-[3px] border-[#050D1B] cursor-pointer hover:scale-110 transition-all ease-in-out
          p-[10px] flex items-center text-[28px] font-semibold text-white"
          onClick={() => navigateTo("/")}>Home</li>
        <li className="border-b-[3px] border-[#D8C4B6BF] cursor-pointer hover:scale-110 transition-all ease-in-out
          p-[10px] flex items-center text-[28px] font-semibold text-[#FFFFFF80]">Blog</li>
        <li className="border-b-[3px] border-[#D8C4B6BF] cursor-pointer hover:scale-110 transition-all ease-in-out
          p-[10px] flex items-center text-[28px] font-semibold text-[#FFFFFF80]"
          onClick={() => navigateTo("/create")}>Create</li>
      </ul>
        <Image
          src="/Login.png"
          width={50}
          height={50}
          className='h-[50px] cursor-pointer hover:scale-125 transition-all ease-in-out'
          alt="Login Button"
          onClick={() => navigateTo("/login")}
        />
    </div>
  );
}

export default Navbar;