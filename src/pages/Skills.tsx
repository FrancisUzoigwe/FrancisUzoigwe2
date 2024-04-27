import { useState } from "react";
import Cards from "../components/common/Cards";
import Ajcash from "../../src/assets/Ajcash.png"
import PodA from "../../src/assets/Poda.png"
import LyfeCare from "../../src/assets/LyfeCare.png"
import EcoBin from "../../src/assets/EcoBin.png"
import EazyHr from "../../src/assets/EazyHr.png"
import Profille from "../../src/assets/Profile.png"
import UI from "../../src/assets/Uiux.png"
const Frontend = () => {
    return <>
        <div className="w-full flex flex-col items-center">
            <div className="w-[90%] grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-4">
                <Cards bg="bg-[#40196D]" text="Ajcash" textColor="text-white" image={Ajcash}
                    descriptionColor="text-white" description="Ajcash, the go-to banking app for busy traders. Say goodbye to long bank queues – manage your finances on the fly, anytime, anywhere. From account management to swift transactions, streamline your banking experience with our user-friendly interface" live="px-4 py-2 rounded-md bg-white rounded-md " github="px-4 py-2 rounded-md border border-white text-white " liveLink="https://ajcash-ng.web.app" githubLink="https://github.com/FrancisUzoigwe/Ajcash" />
                <Cards text="PodA" image={PodA} bg="bg-[#FF9A00]" description="PodA, your gateway to captivating conversations and thought-provoking content. Dive into a world of inspiration and insight as we bring you engaging discussions on topics that matter. From industry trends to personal growth, discover a wealth of knowledge curated just for you" live="px-4 py-2 rounded-md bg-white text-[#FF9A00]" github="px-4 py-2 rounded-md border-white border text-white" githubLink="https://github.com/FrancisUzoigwe/Poda" liveLink="https://poda-pod.web.app" descriptionColor="text-white" textColor="text-white" />
                <Cards image={LyfeCare} bg="bg-white" text="LyfeCare" description="LyfeCare, where health meets savings. Secure your financial future while accessing quality healthcare effortlessly. Explore our savings options and HMO plans tailored for you. Invest in your health and peace of mind today." live="px-4 py-2 rounded-md bg-black text-white " github="px-4 py-2 rounded-md border border-black " githubLink="https://lyfecare.netlify.app" />
                <Cards image={EcoBin} bg="bg-[#03B903] text-white" text="ecoBIN" github="border border-white  px-4 py-2 rounded-md text-white" live="px-4 py-2 rounded-md bg-white text-[#03B903]" description="ecoBIN, where actions speak louder than words. We help you manage waste and recyclables to create a brighter, greener future. Get involved today!" liveLink="https://ecobin.pages.dev" />
                <Cards text="EazyHr" image={EazyHr} bg="bg-[#001328] text-white" description="EazyHr, an all-in-one business management platform. Simplify operations, collaborate effortlessly, and drive growth. Join us today."
                    live="px-4 py-2 rounded-md bg-white text-[#001328]"
                    github="px-4 py-2 rounded-md border border-white text-white"
                    liveLink="https://eazyhr.vercel.app"
                    githubLink="https://github.com/OgbuEsther/Easy_HR_FE2.git"
                />
                <Cards text="Profille" image={Profille} bg="bg-[#40196D] text-white" description="An information updating platform. Enhance your data accuracy and efficiency with our streamlined system. Join us to seamlessly manage and update your information, ensuring it remains current and reliable." live="px-4 py-2 rounded-md bg-white text-[#40196D] " github="border border-white px-4 py-2 rounded-md" liveLink="https://profille.web.app" githubLink="https://github.com/FrancisUzoigwe/profile_fe.git" />
            </div>
        </div>
    </>
}





const Backend = () => {
    return <>
        <div className="w-full flex flex-col items-center">
            <div className="w-[90%] grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-4">
                <Cards text="Profile_Api" image={Profille} bg="bg-[#40196D] text-white" description="Designed and implemented a dynamic API infrastructure adept at orchestrating seamless updates, profile modifications, and permission management. This solution empowers efficient communication between various systems, ensuring swift and secure handling of user data." live="px-4 py-2 rounded-md bg-white text-[#40196D] " github="border border-white px-4 py-2 rounded-md" liveLink="https://profile-practice.onrender.com" githubLink="https://github.com/FrancisUzoigwe/profile_be.git" />
                <Cards text="PodA_Api" image={PodA} bg="bg-[#40196D] text-white" description="Crafted and deployed a robust backend server solution designed to seamlessly facilitate the subscription process for our newsletter recipients. Leveraged this system to promptly dispatch personalized confirmation emails to users upon successful subscription, ensuring they remain informed and engaged with our latest updates." live="px-4 py-2 rounded-md bg-white text-[#40196D] " github="border border-white px-4 py-2 rounded-md" liveLink="https://profile-practice.onrender.com" githubLink="https://github.com/FrancisUzoigwe/profile_be.git" />
            </div>
        </div>
    </>
}


const UiUx = () => {
    return <>
        <div className="w-full flex flex-col items-center">
            <div className="w-[90%] grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-4">
                <Cards text="Instagram Carousels" image={UI} bg="bg-[#2C2C2C] text-white" description="Created some flyer's design for a Non-Governmental Organization that, is established to educate people on CyberCrime and it's consequences on victims and also providing alternative means to life." live="px-4 py-2 rounded-md bg-white text-[#40196D] " github="border hidden border-white px-4 py-2 rounded-md" liveLink="https://www.figma.com/file/SyvWpaCuvUdAN3CEii4dUG/CYSED?type=design&node-id=84-65&mode=design&t=n06XLFr2WCPttcee-0" />
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
