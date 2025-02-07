import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineSelect } from "react-icons/ai";


function Cards(props) {
  const blogsCard = [
      {
        "userId": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
        "userId": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      },
      {
        "userId": 7,
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
      },
      {
        "userId": 8,
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
      },
  ]

  
  return (
    <div className='w-full h-max py-[30px] px-[10px] rounded-[5px] bg-white shadow-[0px_0px_4px_-1px_#213555]
      flex justify-center flex-wrap gap-[40px]'>
      {
        blogsCard.map((data) => (
          <div key={data.userId} className='w-[294px] h-[406px] flex flex-col gap-2.5'>
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
                  {data.title}
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
        ))
      }
      <div className='w-full flex justify-center'>
        <button className='w-[103px] h-[33px] border-2 border-[#213555] rounded-[5px] text-[15px] text-center text-black
          hover:scale-105 hover:border-black hover:bg-[#213555] hover:text-white transition-all ease-in-out'>
            Load More
        </button>
      </div>
    </div>
  );
}

export default Cards;