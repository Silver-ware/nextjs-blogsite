import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";

export default function Carousel({toggle}) {

  return (
    <div className={`${toggle ? `translate-x-0` : `translate-x-full`} flex flex-col justify-between shadow-[inset_0_4px_10px_rgba(0,0,0,0.25)] transition-all ease-out duration-300 absolute w-[calc(50%-40px)] h-[calc(100%-40px)] top-[20px] left-[20px] rounded-[15px] p-[20px] z-50 bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]`}>
        <div className='flex justify-between items-center'>
            <Image src="/logo.png" width={181.4} height={60} />
            <Link href={'/'} className='text-white flex justify-center items-center py-[5px] px-[10px] bg-[#FFFFFF] bg-opacity-[25%] rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:scale-105 scale-100 transition-all ease-in-out duration-200'>Back to website
              <IoIosArrowForward />
            </Link>
        </div>  

        <div className='text-[#F5EFE7] flex flex-col items-center'>
            <div>
                <p className='font-extralight text-[32px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] italic'>Memories Shared,</p>
            </div>
            <div>
                <p className='font-extralight text-[32px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] italic'>Stories Told</p>
            </div>

            <div className='flex py-[14px] gap-[16px]'>
                <div className='w-[35px] h-[7px] rounded-[25px] bg-[#D9D9D9]'></div>
                <div className='w-[35px] h-[7px] rounded-[25px] bg-[#D9D9D9] bg-opacity-[26%]'></div>
                <div className='w-[35px] h-[7px] rounded-[25px] bg-[#D9D9D9] bg-opacity-[26%]'></div>
            </div>
        </div>
    </div>
  )
}
