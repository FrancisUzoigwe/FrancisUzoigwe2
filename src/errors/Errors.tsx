import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Errors = () => {
  const visibility = useSelector((state: any) => state.visibility);
  const navigate = useNavigate()
  useGSAP(() => {
    gsap.to("#animate", { opacity: 1, stagger: 0.1, x: 0, delay: 1 });
    gsap.to("#animate1", { opacity: 1, y: 0, delay: 4 });
  }, [])
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
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
      <div id="animate" className="font-normal opacity-0">Oopsie, this page does not exist </div>
      <div id="animate1" className="mt-3 opacity-0 translate-y-5 transition-all duration-300 border hover:shadow-md hover:cursor-pointer px-4 py-2 rounded-md" onClick={() => {
        navigate(-1)
      }}>Go Back</div>
    </div>
  )
}

export default Errors