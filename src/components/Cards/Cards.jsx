import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineSelect } from "react-icons/ai";

function Cards({userId, title, body}) {
  return (
    <div key={userId} className='w-[294px] h-[406px] flex flex-col gap-2.5'>
      <div className='relative rounded-[5px] h-full w-full shadow-[0px_1px_7px_0px_#213555] 
        bg-[url(/backgrounds/blog_cards_bg.jpg)] bg-cover contrast-125 bg-bottom
        before:content-[""] before:h-full before:w-full before:bg-black/40 before:absolute before:rounded-[5px]'>
        <button className='relative float-right m-2 hover:scale-105'>
          <AiOutlineSelect/>
        </button>
      </div>
      <div className='w-full h-full pb-2.5 px-2.5 flex gap-2.5 flex-col'>
        <div className='bg-transparent h-max p-2.5 w-full border-b-[1px] border-b-[#213555] shadow-[0px_2px_0px_0px_#00000040]
          flex justify-start'>
          <span className='font-normal leading-4 text-2xl truncate'>
            {title}
          </span>
        </div>
        <div className='w-full h-full flex flex-col gap-[5px]'>
          <div className='w-full flex items-center justify-between gap-[10px]'>
            <Image src="/user_assets/profile.jpg" width={20} height={20} className='rounded-[20px] h-[20px]' alt="User Profile"/>
            <span className='text-[15px] w-full font-light leading-[36px]'>Jenny the Explorer</span>
            <span className='italic text-[12px] font-extralight leading-[20px]'>09/18/2025</span>
          </div>
          <div className='w-full h-full flex items-center justify-center gap-2.5'>
            <p className='text-clip text-center italic text-[11px] leading-[10px]'>
              {body}
            </p>
          </div>
        </div>
        <Link href="/view" style={{width: 68, height: 19, paddingBottom: 18}} className='pt-2.5 px-[5px] border-b-[1px] border-b-[#000000]
          italic font-normal text-xs text-center leading-3 hover:font-semibold transition-all ease-in-out duration-500'>
          <span className='w-full'>View Blog</span>
        </Link>
      </div>
    </div>
  );
}

export default Cards;