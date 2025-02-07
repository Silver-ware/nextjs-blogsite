import Image from "next/image";

function TestimonialsCarousel({data, index}) {
  return (
    <div className={`rounded-[20px] pt-10 px-2.5 pb-2.5 flex flex-col items-center justify-center gap-5 shadow-[0px_-3px_12px_0px_#213555]
      ${(index === 1) ? ' w-[290px] h-[512px] bg-[#213555] ' : ' w-[250px] h-[450px] bg-[#F5EFE7]  '}`}>

      {(index === 1) ?
          <Image src={data.profileImage} width={150} height={150} className="h-[150px] rounded-full border-[1px] border-white"
          alt="User Profile Picture"/>:
          <Image src={data.profileImage} width={120} height={120} className="rounded-full border-[1px] border-[#213555]"
          alt="User Profile Picture"/>
      }
          
      <div className={`${(index === 1) ? 'text-white' : ''} w-full h-full flex flex-col gap-[20px] py-5`}>
        <p className="text-xs text-center italic font-extralight">{data.statement}</p>
        <span className="text-center text-base italic font-normal">~ {data.name}</span>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;