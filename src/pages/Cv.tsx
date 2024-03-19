import { IoMdClose } from "react-icons/io"
import { useDispatch } from "react-redux"
import { hidden } from "../global/globalState"
const Cv = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div className='w-full h-screen flex items-center justify-center fixed top-0 bg-black opacity-70 z-[999] ' onClick={() => {
                dispatch(hidden())
            }}>
                <div className='absolute top-10 right-5'><IoMdClose className="text-white text-2xl hover:scale-[1.2] hover:cursor-pointer transition " onClick={() => {
                    dispatch(hidden())
                }} /></div>
                <img className="w-[600px] max-md:w-[80%] rounded-md h-[95%] border border-white" />


            </div>
        </>
    )
}

export default Cv
