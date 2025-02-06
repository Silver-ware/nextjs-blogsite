import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import Carousel from "../carousel/Carousel";
import { useState } from "react";
export default function AuthForm() {

      const [loginEmail, setLoginEmail] = useState("");
      const [loginPass, setLoginPass] = useState("");

      const [registerName, setRegisterName] = useState("");
      const [registerLast, setRegisterLast] = useState("");
      const [registerEmail, setRegisterEmail] = useState("");
      const [registerPass, setRegisterPass] = useState("");
      
      
      const [toggle, setToggle] = useState(true);
  
      const toggleHandler = () =>{
          setLoginEmail("")
          setLoginPass("")
          setRegisterName("")
          setRegisterLast("")
          setRegisterEmail("")
          setRegisterPass("")
          setToggle(!toggle);
      }


  return (
    <div className="w-full bg-[#213555] rounded-[25px] flex p-[20px] relative">

      <Carousel toggle={toggle}/>

{/* Log In Form */}

      <div className={`w-full h-full p-[40px] gap-[20px] flex flex-col ${toggle? 'pointer-events-none' : ''} ${toggle? 'opacity-0' : 'opacity-100'}  transition-all ease-in-out duration-500`}>
        <div className="w-full gap-[30px] p-[10px] flex flex-col">
          <h1 className="font-bold text-[40px] text-[#F5EFE7] italic">Welcome Back</h1>
          <p className="font-light italic text-[15px] text-[#F5EFE7] opacity-[80%]">
            Your story continues—log in and keep sharing your voice with the
            world!
          </p>
        </div>
        <div>
          <div className="w-full p-[10px] flex flex-col gap-[10px]">
            <input
              type="text"
              className="w-full h-[45px] rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white border-none focus:outline-2 focus:outline-white placeholder:text-[#797979] placeholder:opacity-[64%]"
              placeholder="Email"
              value={loginEmail}
              onChange={(e)=>{setLoginEmail(e.target.value)}}
            />
            <input
              type="text"
              className="w-full h-[45px] rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white border-none focus:outline-2 focus:outline-white placeholder:text-[#797979] placeholder:opacity-[64%]"
              placeholder="Password"
              value={loginPass}
              onChange={(e)=>{setLoginPass(e.target.value)}}
            />
          </div>
          <div className="p-[10px] flex gap-[10px] w-full items-center">
            <input type="checkbox" className="h-[16px] w-[16px]" id="check" />
            <label htmlFor="check" className="italic text-[15px] text-white">
              Remember me
            </label>
          </div>
        </div>

        <div className="w-full">
          <button className="bg-[#F5EFE7] h-[45px] w-full rounded-[6px] shadow-[inset_0_4px_4px_#00000040] p-[10px] text-[15px] font-bold tracking-wide text-[#213555] hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer">
            LogIn
          </button>

          <div className="flex items-center justify-between w-full p-[10px] gap-[10px]">
            <hr className="border border-[#797979] opacity-[64%] w-full" />
            <p className="whitespace-nowrap text-[12px] text-[#797979] opacity-[65%]">
              Or login with
            </p>
            <hr className="border border-[#797979] opacity-[64%] w-full" />
          </div>
          <div className="w-full flex justify-center items-center p-[10px] gap-[10px]">
            <div className="w-[214px] flex gap-[10px] border border-[#F5EFE7] rounded-[6px] h-full p-[10px] items-center justify-center hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer">
              <BiLogoGmail className="text-[#F5EFE7]" />
              <p className="text-[#F5EFE7] text-[15px] font-bold tracking-wide">

                Login Account
              </p>
            </div>
            <div className="w-[214px] flex gap-[10px] border border-[#F5EFE7] rounded-[6px] h-full p-[10px] items-center justify-center hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer">
              <BiLogoFacebook className="text-[20px] text-[#F5EFE7]" />
              <p className="text-[#F5EFE7] text-[15px] font-bold tracking-wide ">

                Login Account
              </p>
            </div>
          </div>
          <div></div>
        </div>

        <div className="w-full flex justify-center items-center p-[10px]">
          <p className="font-bold text-[#FFFFFF] text-[15px] tracking-wide flex gap-[5px]">
            Don&apos;t have an account yet?
            <p
              className="font-bold text-[#3E5879] underline underline-offset-[17%] hover:text-[#F5EFE7] transition-all duration-100 ease-in-out cursor-pointer"
              onClick={(e)=>{toggleHandler(e)}}
            >
              Signup
            </p>
          </p>
        </div>
      </div>

{/* Sign Up Form */}

      <div className={`w-full h-full p-[40px] gap-[20px] flex flex-col ${toggle?''  :'pointer-events-none' } ${toggle? 'opacity-100' : 'opacity-0'} transition-all ease-in-out duration-500`}>
        <div className="w-full gap-[30px] p-[10px] flex flex-col">
          <h1 className="font-bold text-[40px] text-[#F5EFE7] italic">Create an account</h1>
          <p className="font-light italic text-[15px] text-[#F5EFE7] opacity-[80%]">
          Join today to  sharing your story, because every voice deserves to be heard!
          </p>
        </div>

        <div>

        <div className="w-full p-[10px] flex gap-[10px]">
            <input
              type="text"
              className="w-full h-[45px] rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white border-none focus:outline-2 focus:outline-white placeholder:text-[#797979] placeholder:opacity-[64%]"
              placeholder="First Name"
              value={registerName}
              onChange={(e)=>{setRegisterName(e.target.value)}}
            />
            <input
              type="text"
              className="w-full h-[45px] rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white border-none focus:outline-2 focus:outline-white placeholder:text-[#797979] placeholder:opacity-[64%]"
              placeholder="Last Name"
              value={registerLast}
              onChange={(e)=>{setRegisterLast(e.target.value)}}
            />
          </div>

          <div className="w-full p-[10px] flex flex-col gap-[10px]">
            <input
              type="text"
              className="w-full h-[45px] rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white border-none focus:outline-2 focus:outline-white placeholder:text-[#797979] placeholder:opacity-[64%]"
              placeholder="Email"
              value={registerEmail}
              onChange={(e)=>{setRegisterEmail(e.target.value)}}
            />
            <input
              type="text"
              className="w-full h-[45px] rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white border-none focus:outline-2 focus:outline-white placeholder:text-[#797979] placeholder:opacity-[64%]"
              placeholder="Enter your password"
              value={registerPass}
              onChange={(e)=>{setRegisterPass(e.target.value)}}
            />
          </div>

          <div className="p-[10px] flex gap-[10px] w-full items-center">
            <input type="checkbox" className="h-[16px] w-[16px]" id="termscheck" />
            <label htmlFor="termscheck" className="italic text-[15px] text-white">
              I agree to the <Link href="#" className="text-[#7B00FF] underline">terms and conditions</Link>
            </label>
            
          </div>
        </div>

        <div className="w-full">
          <button className="bg-[#F5EFE7] h-[45px] w-full rounded-[6px] shadow-[inset_0_4px_4px_#00000040] p-[10px] text-[15px] font-bold tracking-wide text-[#213555] hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer">
            Create  Account
          </button>

          <div className="flex items-center justify-between w-full p-[10px] gap-[10px]">
            <hr className="border border-[#797979] opacity-[64%] w-full" />
            <p className="whitespace-nowrap text-[12px] text-[#797979] opacity-[65%]">
              Or register with
            </p>
            <hr className="border border-[#797979] opacity-[64%] w-full" />
          </div>
          <div className="w-full flex justify-center items-center p-[10px] gap-[10px]">
            <div className="w-[214px] flex gap-[10px] border border-[#F5EFE7] rounded-[6px] h-full p-[10px] items-center justify-center hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer">
              <BiLogoGmail className="text-[#F5EFE7]" />
              <p className="text-[#F5EFE7] text-[15px] font-bold tracking-wide">
                
                Create Account
              </p>
            </div>
            <div className="w-[214px] flex gap-[10px] border border-[#F5EFE7] rounded-[6px] h-full p-[10px] items-center justify-center hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer">
              <BiLogoFacebook className="text-[20px] text-[#F5EFE7]" />
              <p className="text-[#F5EFE7] text-[15px] font-bold tracking-wide ">
                
                Create Account
              </p>
            </div>
          </div>
          <div></div>
        </div>

        <div className="w-full flex justify-center items-center p-[10px]">
          <p className="font-bold text-[#FFFFFF] text-[15px] tracking-wide flex gap-[5px]">
          Already have an account? {" "}
            <p
              className="font-bold text-[#3E5879] underline underline-offset-[17%] hover:text-[#F5EFE7] transition-all duration-100 ease-in-out cursor-pointer"
              onClick={(e)=>{toggleHandler(e)}}
            >
               Login
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
