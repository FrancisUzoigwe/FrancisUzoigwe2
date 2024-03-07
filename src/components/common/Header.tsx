import { useState } from "react"
import { RiMenu5Line } from "react-icons/ri"
import { useDispatch } from "react-redux"
import { toggled } from "../../global/globalState"
const Header = () => {
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
  const dispatch = useDispatch()
  return (
    <>
      {!scroll ? <header className="w-full h-[55px] flex items-center justify-center z-[9999]  relative">
        <header className="w-full h-[55px] flex items-center transition-all duration-300  justify-center bg-white text-black fixed">
          <header className="w-[90%] h-full flex justify-between items-center">
            <div>FrancisUzoigwe</div>
            <div className="flex items-center max-md:hidden">
              <div className="mx-3">Home</div>
              <div className="mx-3">About</div>
              <div className="mx-3">Projects</div>
              <div className="mx-3">Services</div>
              <div className="mx-3">Contact</div>
            </div>
            <div className="hidden max-md:block"><RiMenu5Line className="text-2xl hover:cursor-pointer transition-all duration-300 hover:scale-[1.3]" onClick={() => {
              dispatch(toggled())
            }} /></div>
          </header>
        </header>
      </header> : <header className="w-full h-[55px] flex items-center justify-center z-[9999]  relative">
        <header className="w-full h-[55px] flex items-center transition-all duration-300  justify-center bg-black text-white fixed">
          <header className="w-[90%] h-full flex justify-between items-center">
            <div>FrancisUzoigwe</div>
            <div className="flex items-center max-md:hidden">
              <div className="mx-3">Home</div>
              <div className="mx-3">About</div>
              <div className="mx-3">Projects</div>
              <div className="mx-3">Services</div>
              <div className="mx-3">Contact</div>
            </div>
            <div className="hidden max-md:block"><RiMenu5Line className="text-2xl hover:cursor-pointer transition-all duration-300 hover:scale-[1.3]" onClick={() => {
              dispatch(toggled())
            }} /></div>
          </header>
        </header>
      </header>}
    </>
  )
}

export default Header