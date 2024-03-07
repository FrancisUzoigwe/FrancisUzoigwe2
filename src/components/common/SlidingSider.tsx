import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { changedToggled } from "../../global/globalState"
const SlidingSider = () => {

  const [scroll, setScroll] = useState<boolean>(false)
  const onScroll = () => {
    setScroll(!scroll)
    if (window.scrollY >= 5) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener("scroll", onScroll)

  const motionVariant = {
    open: {
      width: 250,
      x: 0,
      type: "string",
      transition: {
        duration: 0.5
      }
    },
    close: {
      width: 0,
      x: "200px",
      transition: {
        duration: 0.5
      }
    },

  }

  const toggled = useSelector((state: any) => state.toggle)
  const dispatch = useDispatch()
  return (
    <motion.div variants={motionVariant} initial={false} animate={toggled ? "open" : "close"} className={`h-screen ${scroll ? "bg-white" : "bg-black"}  fixed z-[9999] top-0 right-0`}>
      <div className="absolute top-5 right-6">{!scroll ? <IoMdClose className="text-2xl hover:cursor-pointer hover:scale-[1.2] transition-all duration-300 text-white" onClick={() => {
        dispatch(changedToggled())
      }} /> : <IoMdClose className="text-2xl hover:cursor-pointer hover:scale-[1.2] transition-all duration-300" onClick={() => {
        dispatch(changedToggled())
      }} />}</div>
    </motion.div>
  )
}

export default SlidingSider