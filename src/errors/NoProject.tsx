import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dark, light } from "../global/globalState";

const NoProject = () => {
  const visibility = useSelector((state: any) => state.visibility);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useGSAP(() => {
    gsap.to("#animate", { opacity: 1, stagger: 0.1, x: 0, delay: 1 });
    gsap.to("#animate1", { opacity: 1, y: 0, delay: 1 });
    gsap.to("#visibility", { opacity: 1, delay: 0.5 });
  }, [])
  return (
    <div className={`w-full min-h-[calc(100vh-55px)] flex flex-col items-center justify-center ${!visibility ? "bg-white text-black" : "bg-black text-white"}`}>
      <div  className=" w-[90%] flex items-center justify-center mt-5">
        <div id="visibility" className="opacity-0 w-[35px] h-[35px] flex items-center justify-center">
          {visibility ?
            // Light Mode
            <MdOutlineLightMode size={35} className="hover:cursor-pointer" onClick={() => {
              dispatch(dark())
            }} />
            :
            // Dark Mode
            <CiDark size={35} className="hover:cursor-pointer" onClick={() => {
              dispatch(light())
            }} />}
        </div>
      </div>
      <div className='flex '>
        {/* F */}
        <div className='flex mx-3'>
          <div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
          </div>
          <div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className='opacity-0 w-[20px] translate-y-5 rounded-md h-[20px]'></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
          </div>
          <div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className='opacity-0 w-[20px] translate-y-5 rounded-md h-[20px]'></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
          </div>
          <div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className='opacity-0 w-[20px] translate-y-5  rounded-md h-[20px]'></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
          </div>
        </div>
        {/* U */}
        <div className='flex mx-3'>
          <div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ml-[17px] ${!visibility ? "border border-black" : "border border-white"} rounded-md h-[20px] `}></div>
          </div>
          <div className=''>
            <div id='animate' className='opacity-0 w-[20px] translate-y-5  rounded-md h-[20px]'></div>
            <div id='animate' className='opacity-0 w-[20px] translate-y-5  rounded-md h-[20px]'></div>
            <div id='animate' className='opacity-0 w-[20px] translate-y-5  rounded-md h-[20px]'></div>
            <div id='animate' className='opacity-0 w-[20px] translate-y-5  rounded-md h-[20px]'></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ml-[24px] ${!visibility ? "border border-black " : "border border-white"} rounded-md h-[20px] `}></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 -mt-1  ml-[2px] ${!visibility ? "border border-black " : "border border-white"} rounded-md h-[20px]`}></div>
          </div>
          <div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={`opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
          </div>
        </div>
      </div>
      <div className="my-4" />
      <div id="animate" className="font-normal opacity-0">Oopsie!!, this project seems to be missing! </div>
      <div id="animate1" className="mt-3 opacity-0 translate-y-5 transition-all duration-300 border hover:shadow-md hover:cursor-pointer px-4 py-2 rounded-md" onClick={() => {
        navigate(-1)
      }}>Go Back</div>

    </div>
  )
}

export default NoProject