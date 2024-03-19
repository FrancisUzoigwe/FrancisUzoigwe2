import front from "../assets/front.jpg"
import ui from "../assets/ui.jpg"
import backend from "../assets/backend.jpg"
const About = () => {
    return (
        <div className="w-full min-h-[70vh] flex flex-col items-center bg-[#f0f3f5]" id="about">
            <div className="font-black text-[20px] mt-10 uppercase max-md:text-[17px]">About Me</div>
            <div className="w-[90%] my-2 text-[20px] font-bold max-md:text-[16px]">Intro:</div>
            <div className="w-[90%] text-[16px] max-md:text-[14px]  mb-2 text-center">Full-Stack Developer—a master of both front-end and back-end development, with expertise in HTML, CSS, React, TypeScript, JavaScript, Git and server-side technologies Express.Js or Node.js, crafting seamless digital solutions from start to finish, with a blend of creativity and technical skill ensures dynamic web applications that exceed expectations.</div>
            <div className="w-[90%] my-2 text-[20px] font-bold max-md:text-[16px]">Education:</div>
            <div className="w-[90%] max-md:text-[15px] ">
                <p> High School Diploma </p>
                <p>     Holy Ghost Technical School, Umuahia-North, Abia State </p>
                <p>  Graduated: September 2021 </p>
            </div>
            <div className="my-2" />
            <div className="w-[90%] my-2 text-[20px] font-bold max-md:text-[16px]">Skills:</div>
            <div className="w-[90%] max-md:text-[15px] max-md:grid-cols-2 grid grid-cols-3 gap-4 max-md:gap-2">
                <div className="min-h-[300px] bg-white rounded-xl flex flex-col items-center max-sm:col-span-3">
                    <img className="w-[95%] h-[160px] my-2 border  rounded-xl object-cover" src={front} />
                    <div className="font-black">Frontend Developement</div>
                    <div className="w-[95%] text-[15px]">Proficient at creating, responsive high-end designs using React.js.</div>
                </div>
                <div className="h-[300px]  bg-white rounded-xl flex flex-col items-center max-sm:col-span-3">
                    <img className="w-[95%] h-[160px] my-2 border  rounded-xl object-cover" src={backend} />
                    <div className="font-black">Backend Developement</div>
                    <div className="w-[95%] text-[15px]">Proficient at creating functional API's and designing scalabe database using MongoDB & MySQL.</div> </div>
                <div className="h-[300px] max-md:col-span-3 bg-white rounded-xl flex flex-col items-center">
                    <img className="w-[95%] h-[160px] my-2 border  rounded-xl object-cover" src={ui} />
                    <div className="font-black">Ui/Ux Development</div>
                    <div className="w-[95%] text-[15px]">Proficient at creating user appealing interfaces for web applications.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
