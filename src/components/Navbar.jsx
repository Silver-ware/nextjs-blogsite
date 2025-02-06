// import React from 'react';
import { useRouter, useState, useEffect } from 'next/router';

import Image from 'next/image'


function Navbar(hasNavBG) {
  const navbarRoute = useRouter();

  const navigateTo = (path) => {
    navbarRoute.replace(path);
  }
  return (

    <div className={`${hasNavBG === true? 'bg-[#213555]': 'bg-transparent'} w-full bg-opacity-[49%] h-max text-white pt-[25px] px-9 py-[20px] absolute
      flex gap-[70px] items-center justify-center z-50`}>
      <h1 className="text-[57px] font-semibold tracking-tight leading-[64px]">BLOGFIX</h1>
      <ul className="flex flex-1 min-w-[500px] px-[38px] gap-[25px] justify-end">
        <li className="border-b-[3px] border-[#050D1B] cursor-pointer hover:scale-110 transition-all ease-in-out
          p-[10px] flex items-center"
          onClick={() => navigateTo("/")}>
            <span className='text-[28px] font-semibold text-white'>Home</span>
        </li>
        <li className="border-b-[2px] border-[#D8C4B6] border-opacity-75 cursor-pointer hover:scale-110 hover:border-opacity-100 transition-all ease-in-out
          p-[10px] flex items-center hover:[&>span]:opacity-100">
            <span className='text-[28px] font-semibold text-white opacity-50 group-hover:opacity-100'>Blog</span>
        </li>
        <li className="border-b-[2px] border-[#D8C4B6] border-opacity-75 cursor-pointer hover:scale-110 transition-all ease-in-out
          p-[10px] flex items-center hover:[&>span]:opacity-100"
          onClick={() => navigateTo("/create")}>
             <span className='text-[28px] font-semibold text-white opacity-50 group-hover:opacity-100'>Create</span>
        </li>
      </ul>
        <Image
          src="/Login.png"
          width={50}
          height={50}
          className='h-[50px] cursor-pointer hover:scale-125 transition-all ease-in-out'
          alt="Login Button"
          onClick={() => navigateTo("/auth")}
        />
    </div>
  );
}

export default Navbar;