import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { projectApi } from "../../api/projectApis";
const Projects = () => {
    useGSAP(() => {
        gsap.to("#project", { opacity: 1, delay: 0.5, stagger: 0.5 });
        gsap.to("#item", { opacity: 1, delay: 1, stagger: 0.5, y: 0 });
    }, []);

    const visibility = useSelector((state: any) => state.visibility);

    return (
        <div className="w-full min-h-[100vh] flex-col items-center flex" >
            <div className="mt-8 text-[30px] max-md:text-[30px] font-bold opacity-0" id="project">/Projects</div>
            <div id="project" className="text-center font-normal text-[16px] italic opacity-0">[Some of my outstanding works over the years]</div>
            <div className="my-2" />
            <div className="w-[90%] grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
                {projectApi?.map((el: any, i) => {
                    return (

                        <a href={`/projects/${el?.projectID}`} id="item" key={i} className={`hover:shadow-md duration-300 hover:cursor-pointer h-[300px] border rounded-md translate-y-5 opacity-0 ${visibility ? "border-white bg-[#fffff0]" : ""}`}>
                            <div className="w-full h-[200px] bg-gray-100">
                                <img src={`${el?.projectTumbmail}`} alt={`${el?.alt}`} className="rounded-tr-md rounded-tl-md w-full h-full flex items-center justify-center  object-cover " />
                            </div>
                            <div className="w-full h-[100px] justify-center flex items-center rounded-bl-md rounded-br-md bg-white border border-b">
                                <div className="w-[80%] max-md:w-[95%]">
                                    <div className={`font-bold ${visibility ? "text-black" : ""}`}>{el?.projectName}</div>
                                    <a href={`${el?.projectUrl}`} className={`hover:underline ${visibility ? "text-black" : ""}`}>{el?.projectUrl}</a>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div >
    )
}

export default Projects