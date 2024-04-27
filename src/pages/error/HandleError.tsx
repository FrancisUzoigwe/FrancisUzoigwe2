import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
const HandleError = () => {
    const navigate = useNavigate()
    const motionVariant = {
        close: {
            y: -400,
            opacity: 0,
            transition: {
                duration: 2
            }
        },
        open: {
            y: 0,
            opacity: 1
        }
    }
    return (
        <>
            <div className="w-full bg-[#a5a5a5]  flex items-center justify-center h-screen ">
                <motion.div variants={motionVariant} initial="close" animate="open" className="w-[500px] max-md:w-[90%] min-h-[300px] border  rounded-lg flex flex-col items-center bg-white ">
                    <div className="mt-3 font-[Zah] text-[45px]">404</div>
                    <div className="text-[20px] mb-3">Sorry page not found!!</div>
                    <div className="w-[90%] text-center">You might be seeing this error due to a missing route or route misplacement, but don't worry you're in a secured environment 😊😊</div>
                    <div className="my-2 text-center hover:underline hover:cursor-pointer" onClick={() => {
                        navigate(-1)
                    }}>Click Here to go back to the previous screen.</div>
                </motion.div>
            </div>
        </>
    )
}

export default HandleError