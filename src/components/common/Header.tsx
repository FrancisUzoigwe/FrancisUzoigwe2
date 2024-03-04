import { useState } from "react"
import { RiMenu5Line } from "react-icons/ri"
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
  return (
    <>
      {scroll ?  <header className="w-full h-[55px] flex items-center justify-center ">
        <header className="w-full h-[55px] flex items-center transition-all duration-300  justify-center bg-[red] fixed">
          <header className="w-[90%] h-full flex justify-between items-center">
            <div>Logo</div>
            <div className="flex items-center max-md:hidden">
              <div className="mx-3">Home</div>
              <div className="mx-3">About</div>
              <div className="mx-3">Projects</div>
              <div className="mx-3">Services</div>
              <div className="mx-3">Contact</div>
            </div>
            <div className="hidden max-md:block"><RiMenu5Line className="text-2xl hover:cursor-pointer transition-all duration-300 hover:scale-[1.3]" /></div>
          </header>
        </header>
      </header> : null}
    </>
  )
}

export default Header