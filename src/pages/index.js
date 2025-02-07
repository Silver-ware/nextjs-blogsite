import Ad from "@/components/Ad/Ad";
import Cards from "@/components/Cards/Cards";

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
              blogsCard.map((data) => <Cards userID={data.userId} title={data.title} body={data.body}/>)
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