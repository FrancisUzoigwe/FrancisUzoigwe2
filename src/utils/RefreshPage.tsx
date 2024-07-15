import { useSelector } from "react-redux";

const RefreshPage = () => {
  const visibility = useSelector((state: any) => state.visibility);
  return (
    <div className={`flex min-h-[100vh] flex-col items-center justify-center ${visibility ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className=" w-[90%] flex items-center justify-center mt-5">
        <div id="visibility" className=" w-[35px] h-[35px] flex items-center justify-center">
        </div>
      </div>
      <div className='flex '>
        {/* F */}
        <div className='flex mx-3'>
          <div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
          </div>
          <div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className=' w-[20px] translate-y-5 rounded-md h-[20px]'></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
          </div>
          <div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className=' w-[20px] translate-y-5 rounded-md h-[20px]'></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
          </div>
          <div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className=' w-[20px] translate-y-5  rounded-md h-[20px]'></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
          </div>
        </div>
        {/* U */}
        <div className='flex mx-3'>
          <div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={` w-[20px] translate-y-5 ml-[17px] ${!visibility ? "border border-black" : "border border-white"} rounded-md h-[20px] `}></div>
          </div>
          <div className=''>
            <div id='animate' className=' w-[20px] translate-y-5  rounded-md h-[20px]'></div>
            <div id='animate' className=' w-[20px] translate-y-5  rounded-md h-[20px]'></div>
            <div id='animate' className=' w-[20px] translate-y-5  rounded-md h-[20px]'></div>
            <div id='animate' className=' w-[20px] translate-y-5  rounded-md h-[20px]'></div>
            <div id='animate' className={` w-[20px] translate-y-5 ml-[24px] ${!visibility ? "border border-black " : "border border-white"} rounded-md h-[20px] `}></div>
            <div id='animate' className={` w-[20px] translate-y-5 -mt-1  ml-[2px] ${!visibility ? "border border-black " : "border border-white"} rounded-md h-[20px]`}></div>
          </div>
          <div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
            <div id='animate' className={` w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
          </div>
        </div>
      </div>
      <div className="my-3" />
      <div className="flex items-center ">
        <div className="my-4 mr-2">Loading</div>
        <div className="gap-1 flex mt-[2px] ">
          <div id="loader" className={` border size-[8px]  rounded-sm ${!visibility ? "border-black" : "border-white"}`}></div>
          <div id="loader" className={`border size-[8px]  rounded-sm ${!visibility ? "border-black" : "border-white"}`}></div>
          <div id="loader" className={`border size-[8px]  rounded-sm ${!visibility ? "border-black" : "border-white"}`}></div>
          <div id="loader" className={`border size-[8px]  rounded-sm ${!visibility ? "border-black" : "border-white"}`}></div>
        </div>
      </div>
    </div>
  )
}

export default RefreshPage