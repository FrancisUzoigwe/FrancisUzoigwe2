import { useState, useEffect } from "react";
import francis from "../assets/francis.jpg";
import { Link } from "react-scroll"

const MainPage = () => {
    const [sticky, setSticky] = useState<boolean>(false);

    const handleScroll = () => {
        if (window.scrollY >= 100) {
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

    return (
        <>
            <div className="w-full min-h-[60vh] bg-[#333333] text-white flex flex-col items-center" id="home">
                <div className="mt-12 text-[35px] font-black max-md:text-[20px]">Hi, I'm Francis Uzoigwe</div>
                <img src={francis} alt="" className="max-md:w-[150px] max-md:h-[150px] w-[200px] h-[200px] rounded-full object-cover my-3" />
                <div className="text-center w-[90%]">Dynamic Full Stack Web Developer Primed to Transform Your Digital Landscape</div>
                <p className="text-[12px] pb-5 text-center">Frontend | Backend | Ui/Ux | CyberSecurity Enthusiast | Ai Enthusiast</p>
            </div>
            <div className={`w-full h-[40px] py-2 ${sticky ? 'sticky top-0 bg-white z-10' : 'relative'}`}>
                <div className="flex justify-center items-center">
                    <Link to="home" duration={500} smooth={true}>
                        <div className="mx-4 max-md:mx-3  hover:cursor-pointer">Home</div>
                    </Link>
                    <Link to="about" duration={500} smooth={true}>
                        <div className="mx-4 hover:cursor-pointer max-md:mx-3  ">About Me</div>
                    </Link>
                    <div className="mx-4 hover:cursor-pointer max-md:mx-3  ">Projects</div>
                    <div className="mx-4 hover:cursor-pointer max-md:mx-3  ">Contact</div>
                    <a href="https://github.com/FrancisUzoigwe">GitHub</a>
                </div>
            </div>
            <div className="w-full flex flex-col items-center">
                <div className="mt-4 text-[20px] font-black text-center">Passionate Frontend Developer Building User-Centric Websites.</div>
                <p className="text-[14px] w-[80%] my-1 text-center">Proficient in HTML5, CSS3, React, JavaScript, TypeScript, Git, Redux </p>
            </div>
        </>
    );
};

export default MainPage;
