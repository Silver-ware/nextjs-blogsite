import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineSelect } from "react-icons/ai";


function BlogCards({blogCards}) {
  return (
    <>
      {
        blogsCard.map((data) => <Card userID={data.userId} title={data.title} body={data.body}/>)
      }
      <div className='w-full flex justify-center'>
        <button className='w-[103px] h-[33px] border-2 border-[#213555] rounded-[5px] text-[15px] text-center text-black
          hover:scale-105 hover:border-black hover:bg-[#213555] hover:text-white transition-all ease-in-out'>
            Load More
        </button>
      </div>
    </>
  );
}

export default BlogCards;