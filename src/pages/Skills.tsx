import { useState } from "react";
import Cards from "../components/common/Cards";
import Lyfecare from "../assets/LyfeCare.png"
import EazyHr from "../assets/EazyHr.png"
import PodA from "../assets/Poda.png"
import Ajcash from "../assets/Ajcash.png"
import EcoBin from "../assets/EcoBin.png"
import Profile from "../assets/Profile.png"
const Frontend = () => {
    return <>
        <div className="w-full flex flex-col items-center">
            <div className="w-[90%] grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-4">
                <Cards image={Lyfecare} name="Lyfecare" url="https://lyfecare.netlify.app/" github="" description="Welcome to our platform, where you'll find affordable Health Maintenance Organization (HMO) plans and comprehensive health insurance coverage. We're dedicated to providing you with quality care at rates that fit your budget. Join us today for peace of mind and a healthier future." />
                <Cards image={EazyHr} github="https://github.com/OgbuEsther/Easy_HR_FE2.git" url="https://eazyhr.vercel.app/" description="Welcome to our all-in-one business management platform. Simplify operations, collaborate effortlessly, and drive growth. Join us today." name="EazyHr" />
                <Cards name="PodA" url="https://poda-pod.web.app" github="https://github.com/FrancisUzoigwe/Poda" description="Discover a curated collection of the latest podcasts and informative content on our professional platform. Stay up-to-date, inspired, and entertained with our diverse range of topics and expert insights. Join our community for a premium listening experience and expand your knowledge base." image={PodA} />
                <Cards name="Ajcash" image={Ajcash} github="https://github.com/FrancisUzoigwe/Ajcash" url="https://ajcash-ng.web.app" description="Welcome to Ajcash, where we facilitate instant money transfers across the state. Experience seamless transactions with our secure and efficient system. Join us to simplify your financial transactions and enjoy peace of mind knowing your transfers are handled with care and precision." />
                <Cards image={EcoBin} name="EcoBin" description="A waste disposal facilitation platform. We offer tailored solutions for businesses and organizations seeking efficient waste management strategies. Join us to streamline your waste disposal processes and ensure compliance with environmental regulations, all while reducing your carbon footprint." github="" url="https://ecobin.pages.dev/" />
                <Cards image={Profile} name="Profille" description="An information updating platform. Enhance your data accuracy and efficiency with our streamlined system. Join us to seamlessly manage and update your information, ensuring it remains current and reliable." github="https://github.com/FrancisUzoigwe/profile_fe.git" url="https://profille.web.app/" />
            </div>
        </div>
    </>
}




import PodABE from "../assets/Poda.png"
import ProfileBe from "../assets/Profile.png"
const Backend = () => {
    return <>
        <div className="w-full flex flex-col items-center">
            <div className="w-[90%] grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-4">
                <Cards url="https://poda-server.onrender.com" github="https://github.com/FrancisUzoigwe/poda_server" image={PodABE} name="PodA-Api" description="Crafted and deployed a robust backend server solution designed to seamlessly facilitate the subscription process for our newsletter recipients. Leveraged this system to promptly dispatch personalized confirmation emails to users upon successful subscription, ensuring they remain informed and engaged with our latest updates." />
                <Cards url="https://profile-practice.onrender.com" name="Profille-Api" github="https://github.com/FrancisUzoigwe/profile" image={ProfileBe} description="Designed and implemented a dynamic API infrastructure adept at orchestrating seamless updates, profile modifications, and permission management. This solution empowers efficient communication between various systems, ensuring swift and secure handling of user data." />
            </div>
        </div>
    </>
}

const UiUx = () => {
    return <>
        <div className="w-full flex flex-col items-center">
            <div className="w-[90%] grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-4">
                <div>Oh uh, nothing to see here yet.</div>
                <div>Oh uh, nothing to see here yet.</div>
                <div>Oh uh, nothing to see here yet.</div>
            </div>
        </div>
    </>
}




const Skills = () => {
    const [uiux, setUiux] = useState<boolean>(false);
    const [frontend, setFrontend] = useState<boolean>(true);
    const [backend, setBackend] = useState<boolean>(false);

    const handleFrontendClick = () => {
        setFrontend(true);
        setBackend(false);
        setUiux(false);
    };

    const handleBackendClick = () => {
        setFrontend(false);
        setBackend(true);
        setUiux(false);
    };

    const handleUiUxClick = () => {
        setFrontend(false);
        setBackend(false);
        setUiux(true);
    };


    const [scroll, setScroll] = useState<boolean>(false)
    const onScroll = () => {
        if (window.scrollY >= 1200) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    window.addEventListener("scroll", onScroll)

    return (
        <>
            <div className="w-full min-h-[100vh]  flex flex-col items-center bg-[#f0f3f5]" id="skills">
                <div className="mt-10 w-[90%] flex items-center justify-center font-black text-[20px] uppercase max-md:text-[17px]">Skills</div>
                <div className={`flex items-center my-3 z-10  ${scroll ? "sticky top-12 bg-white" : "relative"}`}>
                    <div className={`mx-7 max-md:mx-5 text-[18px] font-black hover:cursor-pointer ${frontend ? "text-blue-500" : ""}`} onClick={handleFrontendClick}>Frontend</div>
                    <div className={`mx-7 max-md:mx-5 text-[18px] font-black hover:cursor-pointer ${backend ? "text-blue-500" : ""}`} onClick={handleBackendClick}>Backend</div>
                    <div className={`mx-7 max-md:mx-5 text-[18px] font-black hover:cursor-pointer ${uiux ? "text-blue-500" : ""}`} onClick={handleUiUxClick}>Ui/Ux</div>
                </div>
                <div className="w-full flex flex-col items-center my-5 ">
                    {frontend && <Frontend />}
                    {backend && <Backend />}
                    {uiux && <UiUx />}
                </div>
            </div>
        </>
    );
};

export default Skills;
