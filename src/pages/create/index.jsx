import { useEffect, useRef, useState } from "react"

export default function index() {
    // set today's date and limit date picker to today
    const [date,setDate] = useState(null)
    useEffect(()=>{
        const today = new Date().toISOString().split("T")[0];;
        setDate(today);
    },[]);

    // custom button triggering hidden file input
    
    const fileRef = useRef(null);

    const triggerFile = () =>{
        fileRef.current?.click();
    }

  return (
    <div className="flex justify-center items-center relative w-full h-[1024px] bg-white bg-cover bg-[url(https://images.unsplash.com/photo-1704739300067-0cfbf8eb8bd3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
        <div className="w-[930px] bg-[#213555] bg-opacity-[50%] p-[25px] rounded-[25px] flex flex-col gap-[10px]">
            <div className="w-full flex flex-col p-[10px] gap-[10px] text-center text-white">
                <p className="font-semibold text-[40px]">Share your memories</p>
                <p>Everyone has a memory to share!</p>
            </div>
            <div className="py-[10px] px-[20px] flex flex-col gap-[10px] w-full">
                <div className="flex p-[10px] gap-[10px] w-full">
                    <input
                    type="text"
                    className="w-full h-[45px] rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white border-none focus:outline-2 focus:outline-white placeholder:text-[#FFFFFF] placeholder:opacity-[35%]"
                    placeholder="Title"
                    maxLength={40}
                    />

                    <input
                    type="date"
                    className="w-full h-[45px] rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white border-none focus:outline-2 focus:outline-white placeholder:text-[#FFFFFF] placeholder:opacity-[35%]"
                    placeholder="Date"
                    max={date}
                    />

                </div>

                <div className="w-full p-[10px]">
                    <textarea name="" id=""
                    placeholder="Description" 
                    maxLength={250}
                    className="w-full h-[150px] resize-none rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white border-none focus:outline-2 focus:outline-white placeholder:text-[#FFFFFF] placeholder:opacity-[35%]"></textarea>
                </div>
                
                <div className="flex p-[10px] gap-[10px] w-full">

                    <button onClick={()=>{triggerFile()}} className="text-start text-opacity-[35%] w-full h-[45px] rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white border-none focus:outline-2 focus:outline-white placeholder:text-[#FFFFFF] placeholder:opacity-[35%]">
                        Click to submit IMG(s)
                    </button>

                    <input
                    ref={fileRef}
                    type="file"
                    className="hidden w-full h-[45px] rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white border-none focus:outline-2 focus:outline-white placeholder:text-[#FFFFFF] placeholder:opacity-[35%]"
                    placeholder="Title"
                    />

                    <input
                    type="text"
                    className="w-full h-[45px] rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white border-none focus:outline-2 focus:outline-white placeholder:text-[#FFFFFF] placeholder:opacity-[35%]"
                    placeholder="Tags (separate with comma)"
                    maxLength={50}
                    />

                </div>

            </div>

            <div className="px-[10px] w-full">
                <button className="w-full bg-white p-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[6px] text-[15px] font-bold text-[#3E5879] tracking-wide hover:scale-105 scale-100 transition-all duration-200 ease-in-out">
                SUBMIT BLOG
                </button>
            </div>

        </div>
    </div>
  )
}
