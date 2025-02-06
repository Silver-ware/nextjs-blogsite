import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoMdShare } from "react-icons/io";

export default function index() {
  return (
    <div className="bg-gradient-to-b from-white from-[80%] to-[#3E5879] w-full h-[1024px] flex flex-col relative">
        <div className="flex items-end w-full h-full bg-black bg-[url(https://images.unsplash.com/photo-1542662565-7e4b66bae529?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover">
            <div className="w-full flex justify-center text-white p-[10px] gap-[10px]">
                <div className="px-[10px] bg-white bg-opacity-[25%] py-[3px] cursor-pointer hover:scale-105 scale-100 transition-all duration-200 ease-in-out">Mountain</div>
                <div className="px-[10px] bg-white bg-opacity-[25%] py-[3px] cursor-pointer hover:scale-105 scale-100 transition-all duration-200 ease-in-out">Scenery</div>
                <div className="px-[10px] bg-white bg-opacity-[25%] py-[3px] cursor-pointer hover:scale-105 scale-100 transition-all duration-200 ease-in-out">Nature</div>    
            </div>
        </div>  
        <div className="w-full h-full flex flex-col px-[40px] gap-[10px] py-[25px] text-[#213555]">
            <div className="w-full p-[10px] flex items-center">
                <p className="text-[40px] font bold">Mount Everest at 6:00 PM</p>
            </div>

            <div className="w-full p-[10px] flex items-center gap-[30px]">
                <div className="flex items-center gap-[10px]">
                    <CgProfile className="text-[40px]"/>
                    <p className="font-medium text-[20px]">Example Name</p>
                </div>

                <div className="flex gap-[25px] items-center">
                    <p className="text-[#213555] opacity-[70%]">February 05, 2025</p>
                    <div className="flex gap-[10px] p-[10px] items-center">
                        <IoMdShare />
                        <p className="text-[#213555] opacity-[70%]">250k Shares</p>
                    </div>
                </div>
            </div>

            <div className="w-full p-[10px] flex items-center">
                <p className="italic text-[#213555] opacity-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div  className="w-full p-[10px] flex items-center">
                <Link href={'/'} className="text-[40px] font-semibold hover:underline hover:underline-offset-[18%]">View Other Blogs</Link>
            </div>
        </div>
    </div>
  )
}
