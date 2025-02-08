import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineSelect } from "react-icons/ai";

function Cards({data}) {
  return (
    <div key={data.userId} className='w-[294px] h-[406px] flex flex-col gap-2.5'>
      <div style={{ backgroundImage: `url(${data.blogImage})`}} className={`relative rounded-[5px] h-full w-full shadow-[0px_1px_7px_0px_#213555] 
        bg-[length:100%] contrast-125 hover:bg-[length:160%] transition-all ease-in-out cursor-pointer bg-center
        before:content-[""] before:h-full before:w-full before:bg-black/40 before:absolute before:rounded-[5px]`}>
        <button className='relative float-right m-2 hover:scale-105 p-1 rounded-full bg-white/50'>
          <AiOutlineSelect/>
        </button>
      </div>
      <div className='w-full h-full pb-2.5 px-2.5 flex gap-2.5 flex-col'>
        <div className='bg-transparent h-max p-2.5 w-full border-b-[1px] border-b-[#213555] shadow-[0px_2px_0px_0px_#00000040]
          flex justify-start'>
          <span className='font-normal leading text-2xl truncate'>
            {data.title}
          </span>
        </div>
        <div className='w-full h-full flex flex-col gap-[5px]'>
          <div className='w-full flex items-center justify-between gap-[10px]'>
            <Image src={`${data.profileImage}`} width={20} height={20} className='rounded-[20px] h-[20px]' alt="User Profile"/>
            <span className='text-[15px] w-full font-light leading-[36px]'>{data.name}</span>
            <span className='italic text-[12px] font-extralight leading-[20px]'>{data.date}</span>
          </div>
          <div className='w-full h-full flex items-center justify-center gap-2.5'>
            <p className='text-clip text-center italic text-[11px] leading-[10px]'>
              {data.body}
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