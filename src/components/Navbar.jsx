import React, { useContext } from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ScrollContext } from './Layout';
import Image from 'next/image'


function Navbar(hasNavBG) {
  const { scrollToSection } = useContext(ScrollContext);

  const [bgColor, setBgColor] = useState("");
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-[#213555]");
        setActiveTab("blog");
      } else {
        setBgColor("");
        setActiveTab("home");
      } 

      if (window.scrollY > 1700){
        setActiveTab("home");
        console.log(activeTab);
      }

      // if(window.screenY > 50){
      //   seActiveTab("blog");
      // } else {
      //   seActiveTab("");
      // }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bgColor, activeTab]);




  
  return (

    <div className={`${hasNavBG === true? 'bg-[#213555]': ''} w-full bg-opacity-[49%] h-max text-white pt-[25px] px-9 py-[20px] fixed
      flex gap-[70px] items-center justify-center z-50 ${bgColor} transition-all ease-in duration-200`}>
      <h1 className="text-[57px] font-semibold tracking-tight leading-[64px]">BLOGFIX</h1>
      <div className="flex flex-1 min-w-[500px] px-[38px] gap-[25px] justify-end">
        <Link 
          href="/"
          className={`${activeTab === "home" ? " border-opacity-100 border-b-[3px] border-[#050D1B] " : "border-opacity-75 border-b-[2px] border-[#D8C4B6]"} cursor-pointer hover:scale-110 transition-all ease-in-out
            p-[10px] flex items-center`}>
            <span className={`${activeTab === "home" ? " opacity-100 ": " opacity-50 "}text-[28px] font-semibold text-white`}>Home</span>
        </Link>


        <button 
          // href="/#blog" 
          onClick={scrollToSection}
          className={`${activeTab === "blog" ? " border-opacity-100 border-b-[3px] border-[#050D1B] ": " border-opacity-75 border-b-[2px] border-[#D8C4B6] "} cursor-pointer hover:scale-110 hover:border-opacity-100 transition-all ease-in-out
            p-[10px] flex items-center hover:[&>span]:opacity-100`}>
            <span className={`${activeTab === "blog" ? " opacity-100 ": " opacity-50 "}text-[28px] font-semibold text-white group-hover:opacity-100`}>Blog</span>
        </button>


        <Link href="/create" className="border-b-[2px] border-[#D8C4B6] border-opacity-75 cursor-pointer hover:scale-110 transition-all ease-in-out
            p-[10px] flex items-center hover:[&>span]:opacity-100">
             <span className='text-[28px] font-semibold text-white opacity-50 group-hover:opacity-100'>Create</span>
        </Link>
      </div>
        <Link href="/auth">
          <Image
            src="/Login.png"
            width={50}
            height={50}
            className='cursor-pointer hover:scale-125 transition-all ease-in-out'
            alt="Login Button"
          />
        </Link>
    </div>
  );
}

export default Navbar;