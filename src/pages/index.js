import Cards from "@/components/Blogs/Cards";

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
          <Cards/>
      </div>
    </>

  );
}

Home.hasNavBG = false;