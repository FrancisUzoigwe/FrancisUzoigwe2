import { useState, useEffect } from "react";
import francis from "../assets/francis.jpg";
import { Link } from "react-scroll"
import { FaGithub } from "react-icons/fa"
import Cv from "./Cv";
import { useDispatch, useSelector } from "react-redux";
import { showcv } from "../global/globalState";

const MainPage = () => {
    const [sticky, setSticky] = useState<boolean>(false);

    const handleScroll = () => {
        if (window.scrollY >= 300) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const dispatch = useDispatch()
    const toggle = useSelector((state: any) => state.toggle)
    return (
        <>
            {toggle && <Cv />}
            <div className="w-full min-h-[60vh] bg-[#333333] text-white flex flex-col items-center" id="home">
                <div className="mt-12 text-[35px] font-black max-md:text-[20px]">Hi, I'm Francis Uzoigwe</div>
                <img src={francis} alt="" className="max-md:w-[150px] max-md:h-[150px] w-[200px] h-[200px] rounded-full object-cover object-top my-3" loading="lazy" />
                <div className="text-center w-[90%] text-[20px] max-md:text-[16px]">Dynamic Full Stack Web Developer Primed to Transform Your Digital Landscape</div>
                <p className="text-[12px] pb-5 text-center">Frontend Developer | Backend Developer | Ui/Ux Developer | CyberSecurity Enthusiast | Ai Enthusiast</p>
                <button className="mb-4 py-[10px] px-5 bg-black text-white rounded-lg max-md:text-[12px] text-[16px]" onClick={() => {
                    dispatch(showcv())
                }}>Download CV</button>
            </div>

            <div className={`w-full h-[40px] py-2 ${sticky ? 'sticky top-0 bg-white z-10' : 'relative bg-[#f0f3f5]'}`}>
                <div className="flex justify-center items-center">
                    <Link to="home" duration={1000} smooth={true}>
                        <div className="mx-4 max-md:mx-3 max-md:text-[14px]  hover:cursor-pointer">Home</div>
                    </Link>
                    <Link to="about" duration={1000} smooth={true}>
                        <div className="mx-4 hover:cursor-pointer max-md:mx-3 max-md:text-[14px]  ">About Me</div>
                    </Link>
                    <Link to="project" duration={1000} smooth={true}>

                        <div className="mx-4 hover:cursor-pointer max-md:mx-3 max-md:text-[14px] ">Projects</div>

                    </Link>
                    <Link to="contact" duration={1000} smooth={true}>

                        <div className="mx-4 hover:cursor-pointer max-md:mx-3  max-md:text-[14px] ">Contact</div>
                    </Link>
                    <a href="https://github.com/FrancisUzoigwe"><FaGithub size={20} />
                    </a >
                </div>
            </div>
            <div className="w-full flex flex-col items-center bg-[#f0f3f5]">
                <div className="mt-4 text-[20px] font-black text-center max-md:text-[16px]">Passionate Frontend Developer Building User-Centric Websites.</div>
                <p className="text-[14px] w-[80%] my-1 text-center">Proficient in HTML5, CSS3, React, JavaScript, TypeScript, Git, Redux </p>
            </div>
        </>
    );
};

export default MainPage;
