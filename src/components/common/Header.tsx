import { MdOutlineLightMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { CiDark } from "react-icons/ci";
import { light, dark, open, close } from "../../global/globalState";
import { useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5"
import Sider from "./Sider";
import { IoMdClose } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Header = () => {
    const visibility = useSelector((state: any) => state.visibility);
    const toggle = useSelector((state: any) => state.toggle);
    const dispatch = useDispatch();
    const location = useLocation();
    const active = location.pathname


    const isActive = (path: string) => {
        if (path === "/projects") {
            return active === path || active.startsWith("/projects")
        }
        return active === path
    }
    useGSAP(() => {
        gsap.to("#header", { opacity: 1, x: 0, stagger: 0.2 })
    })
    return (
        <>
            <div className={`w-full transition-all h-[55px] flex items-center justify-center ${visibility ? "bg-black text-white" : ""}`} id="home">
                {/* Fixed Positioning... */}
                <div className={`w-full h-[55px] flex items-center justify-center fixed shadow-md top-0 z-10 ${visibility ? "bg-black text-white" : "bg-white "}`}>
                    {/* Head's main... */}
                    <div className="w-[90%] max-md:w-[90%] h-[55px] flex items-center justify-between">
                        <a href="/" className="text-[14px]">FrancisUzoigwe</a>
                        <div className="max-md:hidden flex items-center justify-center text-[14px]">
                            <a href="/" className={`mx-3 hover:cursor-pointer opacity-0 translate-x-4 hover:underline ${active === "/" ? "underline" : ""}`} id="header">Home</a>
                            <a href="/about" className={`mx-3 hover:cursor-pointer opacity-0 translate-x-4 hover:underline ${active === "/about" ? "underline " : ""}`} id="header">About</a>
                            <a href="/projects" className={`mx-3 hover:cursor-pointer opacity-0 translate-x-4 hover:underline ${isActive("/projects") ? "underline" : ""}`}
                                id="header">Projects</a>
                        </div>
                        <div className="flex items-center justify-center max-md:hidden">
                            <div className="mr-3 max-md:hidden text-[14px] hover:cursor-pointer transition-all duration-300"
                            >{visibility ?
                                // Light Mode
                                <MdOutlineLightMode size={22} onClick={() => {
                                    dispatch(dark())
                                }} />
                                :
                                // Dark Mode
                                <CiDark size={22} className="hover:cursor-pointer" onClick={() => {
                                    dispatch(light())
                                }} />}</div>
                            {/* Button Part */}
                            <a href="/contact" className={`flex ease-in-out items-center px-5 py-2 rounded-full hover:border-[orange] transition-all duration-300 border text-[14px] ${active === "/contact" ? "underline" : ""}`}>Contact </a>
                        </div>
                        {/* Drop Down Part */}
                        <div className=" hidden max-md:block">
                            <div className="hidden max-md:block hover:text-[orange] transition-all duration-300 hover:cursor-pointer">{!toggle ? <IoMenu onClick={() => {
                                dispatch(open())
                            }} size={25} /> : <IoMdClose onClick={() => {
                                dispatch(close())
                            }} size={25} />}</div>
                            <>
                                {toggle ? <div className="top-0 fixed">
                                    <Sider />
                                </div> : null}
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header