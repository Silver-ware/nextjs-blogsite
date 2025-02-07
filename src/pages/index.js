import Ad from "@/components/Ad/Ad";
import Cards from "@/components/Cards/Cards";

const blogsCard = [
  {
    "userId": 1,
    "name": "Jenny The Explorer",
    "profileImage": "https://avatar.iran.liara.run/public/92",
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "date": "09/18/2025",
    "blogImage": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww"
  },
  {
    "userId": 2,
    "name": "Ian The Explorer",
    "profileImage": "https://avatar.iran.liara.run/public/44",
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    "date": "09/20/2025",
    "blogImage": "https://images.unsplash.com/photo-1506057213367-028a17ec52e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "userId": 3,
    "name": "Garry The Explorer",
    "profileImage": "https://avatar.iran.liara.run/public/50",
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    "date": "12/20/2025",
    "blogImage": "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "userId": 4,
    "name": "June The Explorer",
    "profileImage": "https://avatar.iran.liara.run/public/3",
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    "date": "09/10/2019",
    "blogImage": "https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "userId": 5,
    "name": "Madie The Explorer",
    "profileImage": "https://avatar.iran.liara.run/public/99",
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    "date": "05/18/2025",
    "blogImage": "https://images.unsplash.com/photo-1539634262233-7c0b48ab9503?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "userId": 6,
    "name": "Justin The Explorer",
    "profileImage": "https://avatar.iran.liara.run/public/2",
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    "date": "03/23/2025",
    "blogImage": "https://plus.unsplash.com/premium_photo-1673697239984-b089baf7b6e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    "userId": 7,
    "name": "Emman The Explorer",
    "profileImage": "https://avatar.iran.liara.run/public/48",
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    "date": "05/22/2025",
    "blogImage": "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    "userId": 8,
    "name": "Brix The Explorer",
    "profileImage": "https://avatar.iran.liara.run/public/26",
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    "date": "07/22/2022",
    "blogImage": "https://plus.unsplash.com/premium_photo-1666792562670-f8a139c265ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
]

export default function Home() {
  return (
    <>
      <div className="relative h-[748px] w-full bg-[url(/backgrounds/homepage_head_bg.jpg)] bg-center 
        bg-[length:100%] bg-no-repeat flex items-center justify-center flex-col gap-[34px]
        before:content-[''] before:h-full before:w-full before:bg-black/50 before:absolute">        
        <span className="relative text-white font-bold text-5xl text-center">
            INSPIRATION FOR TRAVEL BY REAL PEOPLE
        </span>
        <span className="relative font-light italic text-[32px] text-white opacity-[55%]">
            Touch some grass bruh.
        </span>
        <button className="relative rounded-[5px] border-4 border-white px-[5px] font-light text-2xl
          hover:scale-110 hover:bg-black/50 transition-all ease-in-out">
          <span className="px-[5px] text-white">Learn More</span>
        </button>
      </div>
      <div className="py-[60px] px-[30px] bg-[#F5EFE7] w-full h-max">
        <div className='w-full h-max py-[30px] px-[10px] rounded-[5px] bg-white shadow-[0px_0px_4px_-1px_#213555]
          grid grid-cols-4 place-items-center gap-[40px]'>
            {
              blogsCard.map((data) => <Cards userID={data.userId} name={data.name} title={data.title} body={data.body} profileImage={data.profileImage} date={data.date} blogImage={data.blogImage}/>)
            }
            <button className='col-span-4 w-[103px] h-[33px] border-2 border-[#213555] rounded-[5px] text-[15px] text-center text-black
              hover:scale-105 hover:border-black hover:bg-[#213555] hover:text-white transition-all ease-in-out'>
                Load More
            </button>
        </div>
      </div>
      <Ad/>
    </>

  );
}

Home.hasNavBG = false;