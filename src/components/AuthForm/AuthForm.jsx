
export default function AuthForm() {

    return (
    <div className="w-full bg-[#213555] rounded-[25px] flex p-[20px]">

      <div className="w-full h-full p-[40px] gap-[20px] flex flex-col">
          <div className="w-full gap-[30px] p-[10px] flex flex-col">
            <h1 className="font-bold text-[40px] text-[#F5EFE7]">Welcome Back</h1>
            <p className="font-light italic text-[15px] text-[#F5EFE7CC] opacity-[80%]">Your story continues—log in and keep sharing your voice with the world!</p>
          </div>
          <div>
            <div className="w-full p-[10px] flex flex-col gap-[10px]">
                <input type="text" className="w-full h-[45px] rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
                <input type="text" className="w-full h-[45px] rounded-[6px] p-[10px] gap-[10px] bg-[#3E5879A6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
            </div>
            <div className="p-[10px] flex gap-[10px] w-full items-center">
                <input type="checkbox" className="h-[16px] w-[16px]" id="check"/>
                <label htmlFor="check" className="italic text-[15px] text-white">Remember me</label>
            </div>
          </div>

          <div className="w-full">
            <button className="bg-[#F5EFE7] h-[45px] w-full rounded-[6px] shadow-[inset_0_4px_4px_#00000040] p-[10px] text-[15px] font-bold tracking-wide text-[#213555]">
                    LogIn
            </button>

            <div className="flex items-center justify-between w-full p-[10px] gap-[10px]">
                <hr className="border border-[#797979A3] opacity-[64%] w-full"/>
                <p className="whitespace-nowrap text-[12px] text-[#797979A6] opacity-[65%]" >Or login with</p>
                <hr className="border border-[#797979A3] opacity-[64%] w-full"/>
            </div>
            <div className="w-full flex justify-center items-center p-[10px] gap-[10px]">
                <div className="w-[214px] flex gap-[10px] border border-[#F5EFE7] rounded-[6px] h-full p-[10px] items-center justify-center">
                    <p className="text-[#F5EFE7] text-[15px] font-bold tracking-wide"> Create Account </p>
                    
                </div>
                <div className="w-[214px] flex gap-[10px] border border-[#F5EFE7] rounded-[6px] h-full p-[10px] items-center justify-center">
                    <p className="text-[#F5EFE7] text-[15px] font-bold tracking-wide"> Create Account </p>
                </div>
            </div>
            <div>
                
            </div>
          </div>

          <div className="w-full flex justify-center items-center p-[10px]">
            <p className="font-medium text-[#FFFFFF]">
              Don&apos;t have an account yet? <a href="#">Signup</a>
            </p>
          </div>
      </div>

      <div className="w-full h-full">

      </div>


    </div>
  );
}
