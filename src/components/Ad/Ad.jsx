import Link from "next/link";

export default function Ad() {
  return (

    <div className="w-full pt-[100px] px-[100px] pb-[70px] bg-[#3E5879] text-center">

      <div className="rounded-[10px] relative w-full flex flex-col items-center justify-center gap-[10px] shadow-[inset_0_4px_10px_rgba(0,0,0,0.25)] contrast-125">
        {/* Background img */}
        <div className="rounded-[10px] absolute inset-0 contrast-125 bg-[url(https://s3-alpha-sig.figma.com/img/d76a/3243/3fab37d082bbd4083db5f9b240c6fcb4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oJmuXsE7bEd27u8dKsDODxkKGKR~5qPHOBvGOov7QeuIJSJDs4S9tEo~3b5Smye4HvcoeuJ4VnxPj4Lp2kM~t4WXtmxsccAAvaph2jFRZWPrA8Oz13qAYK1VOPimkiSD737hHRCO5y4oQhzJqhU5WnCZ-nUD9q1GZAh4TAYhQEx-0PMYSflVCCZ~L0yFllQ61WUIUuKmkFplFrONkp79SFyPNTFBHcTIw2N~1hBkuzc9XhibcKncP0bEwYg1j1CksfAuF2SXixx~QegTQUdXH4ArInYU6hxQ~tv8PRyFY90pBu0-QF4OFKVWK16M8HSsJ9WbknEVEVA57RZLUm6uAA__)] bg-cover bg-center"></div>
        
        <div className="absolute inset-0 bg-[#3E5879] opacity-60"></div>
        {/* Background img */}

        <div className="bg-opacity-[85%] gap-[10px] w-full flex flex-col justify-center items-center relative text-white pt-[45px] pb-[10px] px-[10px] z-10">
          <div className="w-full ">
            <button className="py-[17px] px-[20px] bg-white bg-opacity-[32%] text-[48px] font-bold rounded-[10px] min-w-[237px] scale-100 hover:scale-105 transition-all duration-200 ease-in-out">BLOGS</button>
          </div>

          <div className="flex flex-col justify-center items-center py-[10px]">
            <p className="text-[32px] max-w-[1026px] font-semibold">Lorem ipsum odor amet, consectetuer adipiscing elit. Euismod ut libero molestie sed; orci himenaeos risus cras. Sapien pulvinar elit volutpat eleifend praesent mi potenti eleifend.</p>
            <p className="w-full text-[15px] font-bold opacity-[75%]">Lorem ipsum odor amet, consectetuer adipiscing elit. Primis ipsum aenean dictumst magna iaculis finibus fringilla!</p>
          </div>

          <div className="w-full py-[15px] px-[76px]">
            <Link href="#" className="font-bold text-[32px] underline underline-offset-auto hover:underline-offset-8 transition-all duration-200 ease-in-out"> JOIN US </Link>
          </div>
        </div>
        
      </div>


    </div>
  );
}
