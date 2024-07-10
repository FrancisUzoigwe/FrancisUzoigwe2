import { MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux"
import { close, dark, light } from "../../global/globalState";
import { CiDark } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";

const Sider = () => {
  const location = useLocation();
  const active = location.pathname
  useGSAP(() => {
    gsap.to("#stagger", { opacity: 1, y: 0, stagger: 0.3 })
    gsap.to("#links", { opacity: 1, x: 0, stagger: 0.3 })
  }, [])
  const visibility = useSelector((state: any) => state.visibility);
  const dispatch = useDispatch();
  return (
    <div className={`flex flex-col items-center transition-all duration-300 ${!visibility ? "bg-white text-black" : "bg-black text-white"} fixed right-0 bottom-0 top-0 rounded-md w-full h-[100vh] z-[300]`}>
      <div className="w-[90%] flex items-center justify-between mt-3" ><div className="text-[14px]">FrancisUzoigwe</div><IoMdClose size={30} className="hover:cursor-pointer hover:text-[orange] transition-all duration-300" onClick={() => {
        dispatch(close())
      }} /></div>
      <div className="w-[90%] flex items-center justify-end mt-5">
        <div className="w-[35px] h-[35px] flex items-center justify-center">
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
      <Link to="/" >
        <div id="stagger" className={`opacity-0 my-[12px] text-[15px] translate-y-3 ${active === "/" ? "underline" : ""}`} onClick={() => {
          dispatch(close())
        }}>Home</div></Link>
      <Link to="/about" >
        <div id="stagger" className={`opacity-0 my-[12px] text-[15px] translate-y-3 ${active === "/about" ? "underline" : ""}`} onClick={() => {
          dispatch(close())
        }}>About</div>
      </Link>

      <Link to="/projects">
        <div id="stagger" className={`opacity-0 my-[12px] text-[15px] translate-y-3 ${active === "/projects" ? "underline" : ""}`} onClick={() => {
          dispatch(close())
        }}>Projects</div>
      </Link>
      <Link to="/contact" >
        <div id="stagger" className={`opacity-0 my-[12px] text-[15px] translate-y-3 ${active === "/contact" ? "underline" : ""}`} onClick={() => {
          dispatch(close())
        }}>Contact</div>
      </Link>

      <div id="stagger" className="opacity-0 font-black text-[30px] mt-5">Say Hello!</div>


      <div className="flex items-center justify-between w-[50%] mt-5">
        <a id="links" href="https://github.com/francisuzoigwe" className="hover:cursor-pointer opacity-0 translate-x-3"><FaGithub size={25} className="" /> </a>
        <a id="links" href="https://linkedin.com/in/francis-uzoigwe" className="translate-x-3 hover:cursor-pointer opacity-0"><FaLinkedin size={25} className="" /> </a>
        <a id="links" href="mailto:kossyuzoigwe@gmail.com" className="translate-x-3 opacity-0 text-[14px]mt-2"><BiLogoGmail size={25} /> </a>
        <a id="links" href="https://twitter.com/francisuzoigwe1" className="translate-x-3 hover:cursor-pointer opacity-0"><FaXTwitter size={25} className="" /> </a>
        <a id="links" href="https://wa.link/vnj7tu" className="translate-x-3 hover:cursor-pointer opacity-0"><FaWhatsapp size={25} className="" /> </a>
      </div>
    </div>
  )
}

export default Sider