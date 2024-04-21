import { useState, useEffect } from "react";
import francis from "../assets/francis.jpg";
import { Link } from "react-scroll"
import Cv from "./Cv";
import { useSelector } from "react-redux";
import francisuzoigwe from "../pages/FrancisUzoigweWD.pdf"
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

    // const dispatch = useDispatch()
    const toggle = useSelector((state: any) => state.toggle)
    return (
        <>
            {toggle && <Cv />}
            <div className="w-full min-h-[60vh] bg-[#333333] text-white flex flex-col items-center" id="home">
                <div className="mt-12 text-[35px] font-black max-md:text-[20px] text-center">Hi, I'm Francis Uzoigwe</div>
                <img src={francis} alt="FrancisUzoigwe" className="max-md:w-[150px] max-md:h-[150px] w-[200px] h-[200px] rounded-full object-cover object-top my-3 overflow-hidden" loading="lazy" />
                <div className="text-center w-[90%] text-[20px] max-md:text-[16px]">A Dynamic Full Stack Web Developer Primed to Transform Your Digital Landscape</div>
                <p className="text-[12px] pb-5 text-center w-[90%]">Frontend Developer | Backend Developer | Ui/Ux Developer | CyberSecurity Enthusiast | Ai Enthusiast</p>
                <a href={francisuzoigwe} download="FrancisUzoigwe" className="px-5 py-3 rounded-md my-4 bg-black text-white">Download CV</a>
            </div>

            <div className={`w-full h-[40px] py-2 z-[100] ${sticky ? 'sticky top-0 bg-white z-10' : 'relative bg-[#f0f3f5]'}`}>
                <div className="flex justify-center items-center">
                    <Link to="home" duration={1000} smooth={true}>
                        <div className="mx-4 max-md:mx-3 max-md:text-[14px]  hover:cursor-pointer">Home</div>
                    </Link>
                    <Link to="about" duration={1000} smooth={true}>
                        <div className="mx-4 hover:cursor-pointer max-md:mx-3 max-md:text-[14px]  ">About Me</div>
                    </Link>
                    <Link to="skills" duration={1000} smooth={true}>

                        <div className="mx-4 hover:cursor-pointer max-md:mx-3 max-md:text-[14px] ">Skills</div>
                    </Link>
                    <Link to="project" duration={1000} smooth={true}>

                        <div className="mx-4 hover:cursor-pointer max-md:mx-3 max-md:text-[14px] ">Projects</div>
                    </Link>
                    <Link to="contact" duration={1000} smooth={true}>

                        <div className="mx-4 hover:cursor-pointer max-md:mx-3  max-md:text-[14px] ">Contact</div>
                    </Link>
                </div>
            </div>
            <div className="w-full flex flex-col items-center bg-[#f0f3f5]">
                <div className="mt-4 text-[20px] w-[90%] font-black text-center max-md:text-[16px]">Passionate Full Stack Developer Focused on Building User-Centric Websites.</div>
            </div>
        </>
    );
};

export default MainPage;
