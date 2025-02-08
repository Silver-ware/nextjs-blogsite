import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoMdShare } from "react-icons/io";
import { blogsCard } from "..";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Index() {
    // get params
    const router = useRouter();
    const {id} = router.query;

    console.log(typeof id);

    const [numericID, setNumericID] = useState(null);
    const [blog, setBlog] = useState(null);
    const [tag, setTag] = useState([]);
    
    // convert params into number
    useEffect(()=>{
        if(id){
                const parsedID = parseInt(id, 10);
                setNumericID(parsedID); 
        }
        
    },[id])

    // set blog

    useEffect(()=>{
        if(numericID !== null){
            setBlog(blogsCard[numericID - 1]);            
        }
    },[numericID]);

    useEffect(()=>{
        if(blog !== null){
            setTag(blog.tags.split(','));
            console.log(blog.tags);
        }
    },[blog]);




  return (
    <div className="bg-gradient-to-b from-white from-[80%] to-[#3E5879] w-full h-[1024px] flex flex-col relative">
        <div style={{ backgroundImage: `url(${blog?.blogImage})`}} className="flex items-end w-full h-full bg-black bg-center bg-cover">
            <div className="w-full flex justify-center text-white p-[10px] gap-[10px]">
                {tag.map((item, index) => (
                    <div key={index} className="px-[10px] bg-white bg-opacity-[25%] py-[3px] cursor-pointer hover:scale-105 scale-100 transition-all duration-200 ease-in-out">{item}</div>
                ))}   
            </div>
        </div>  
        <div className="w-full h-full flex flex-col px-[40px] gap-[10px] py-[25px] text-[#213555]">
            <div className="w-full p-[10px] flex items-center">
                <p className="text-[40px] font bold"></p>
            </div>

            <div className="w-full p-[10px] flex items-center gap-[30px]">
                <div className="flex items-center gap-[10px]">
                    <CgProfile className="text-[40px]"/>
                    <p className="font-medium text-[20px]">{blog?.name}</p>
                </div>

                <div className="flex gap-[25px] items-center">
                    <p className="text-[#213555] opacity-[70%]">{blog?.date}</p>
                    <div className="flex gap-[10px] p-[10px] items-center">
                        <IoMdShare />
                        <p className="text-[#213555] opacity-[70%]">{blog?.shares} Shares</p>
                    </div>
                </div>
            </div>

            <div className="w-full p-[10px] flex items-center">
                <p className="italic text-[#213555] opacity-[80%]">{blog?.body}</p>
            </div>

            <div  className="w-full p-[10px] flex items-center">
                <Link href={'/#blog'} className="text-[40px] font-semibold hover:underline hover:underline-offset-[18%]">View Other Blogs</Link>
            </div>
        </div>
    </div>
  )
}
