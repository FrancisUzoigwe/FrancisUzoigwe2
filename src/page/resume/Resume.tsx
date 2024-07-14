import { useSelector } from "react-redux";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdCheckBox, MdOutlineDownloading } from "react-icons/md";
import Francis from "../../assets/Francis-Uzoigwe-Resume.pdf";
import { IoIosMailUnread } from "react-icons/io";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { IoMailOpen } from "react-icons/io5";
import gsap from "gsap";

const Resume = () => {

    const data = [
        {
            tech: "JavaScript",
        },
        {
            tech: "TypeScript",
        },
        {
            tech: "React",
        },
        {
            tech: "HTML5",
        },
        {
            tech: "CSS3",
        },
        {
            tech: "Tailwind CSS",
        },
        {
            tech: "NodeJs",
        },
        {
            tech: "Styled-Components",
        },
        {
            tech: "Material UI",
        },
        {
            tech: "React Native",
        },
        {
            tech: "NextJs",
        },
        {
            tech: "GSAP",
        },
        {
            tech: "FireBase",
        },
        {
            tech: "Vivux",
        },
        {
            tech: "Git",
        },
        {
            tech: "GitHub",
        },
        {
            tech: "Redux",
        },
        {
            tech: "Jotai",
        },
    ]

    const other = [
        {
            tech: "PWA"
        },
        {
            tech: "Performance Optimization",
        },
        {
            tech: "Search Engine Optimization",
        },
        {
            tech: "Software Testing"
        },
        {
            tech: "Responsive Web Design"
        },
    ]

    const experience = [
        // Poda
        {
            name: "Poda",
            title: "Lead Frontend Developer",
            location: "Lagos, Nigeria",
            date: "Mar 2024 - Present",
            tasks: [
                "Transformed its WordPress site into a React-based Progressive Web App (PWA), reduced crashes by 89%, which tripled annual revenue.",
                "Conducted thorough unit testing making use of Jest and Vitest, which gave birth to a high-quality product, resulting in 99.98% test coverage, 0% defect rate in deployed code.",
                "Increased mobile engagement by 95% and overall user satisfaction by 25% by implementing responsive design principles and developing cross-platform compatibility on iOS and Android.",
                "Orchestrated the development of user-friendly interfaces leveraging clean design and intuitive navigation techniques, boosted user engagement metrics by 40%, and elevated overall customer satisfaction levels by 25% in the entertainment sector.",
                "Effectively delegated tasks to team members, resulting in accelerated development, enhanced collaboration, and a 20% reduction in manpower costs."
            ]
        },
        // Dirt2School
        {
            name: "Dirt2School",
            title: "Frontend Developer",
            location: "Lagos, Nigeria",
            date: "Aug 2023 - Dec 2023",
            tasks: [
                "Developed responsive web applications to optimize accessibility across multiple devices, resulting in a 90% increase in mobile traffic and, a 25% increase in engagement from tablet users, WCAG 2.1 Level AA accessibility compliance, ensuring equal access for all users.",
                "Optimized website performances, resulting in a 30% reduction in average page load time (from 5s to 2.1s), a 25% increase in mobile conversion rates, a 15% increase in repeat visits, and overall user engagement.",
                "Fortified  Dirt2School’s security posture by implementing robust user authentication and authorization systems, safeguarding user privacy,  and upholding industry best practices, resulting in a 50% reduction in security vulnerabilities and zero security breaches or incidents reported",
                "Collaborated hand-in-hand with Backend engineers to ensure comprehensive testing of all functionalities, which amounted to 100% test coverage of API endpoints, 25% in deployment speed, and 30% reduction in defects and bugs",
            ]
        },
        // LyfeCare
        {
            name: "LyfeCare",
            title: "Frontend Developer",
            location: "Lagos, Nigeria",
            date: "Jan 2023 - July 2023",
            tasks: [
                "Managed the product life cycle of LyfeCare, conducting user research to identify pain points, and collaborating with engineers and designers to implement key features like integration with blood glucose meters and secure data sharing with healthcare providers.",
                "Led the development and successful launch of LyfeCare, enhancing health insurance accessibility by 16% for all low-class citizens.",
                "Led the development and launch of LyfeCare, a web app for blood sugar monitoring and management. LyfeCare empowers diabetic patients by providing real-time data analysis, personalized insights, and medication reminders, resulting in a 20% decrease in average HbA1c levels within a year of use.",
            ]
        },

    ];


    const visibility = useSelector((state: any) => state.visibility);
    const mailIconRef = useRef<HTMLDivElement>(null);
    const [mailOpen, setMailOpen] = useState(false);
    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.to(mailIconRef.current, {
            duration: 0.7,
            opacity: 0,
            onComplete: () => setMailOpen(true),
        }).to(mailIconRef.current, {
            duration: 0.7,
            opacity: 1,
        }).to(mailIconRef.current, {
            duration: 0.7,
            opacity: 0,
            onComplete: () => setMailOpen(false),
        }).to(mailIconRef.current, {
            duration: 0.7,
            opacity: 1,
        });

        return () => {
            tl.kill();
        };
    }, []);


    return (
        <div className="min-h-[100vh] flex w-full flex-col items-center bg-gray-50">
            <div className={`w-[90%] flex flex-col items-center my-3 rounded-md min-h-[700px] shadow-md ${visibility ? "bg-black text-white" : "bg-white text-black"}`}>
                <div className="w-[95%] flex items-center justify-end">
                    <div className="flex items-center mt-1 ">
                        <a href="https://linkedin.com/in/francis-uzoigwe" className=""><FaLinkedin size={20} className={`${visibility ? "text-white" : "text-[blue]"}`} /></a>
                        <a href="mailto:kossyuzoigwe@gmail.com" className="hidden max-md:block mx-2">
                            <div ref={mailIconRef}>
                                {mailOpen ? <IoMailOpen size={20} /> : <IoIosMailUnread size={20} />}
                            </div>
                        </a>
                        <a href="https://github.com/francisuzoigwe" className=" hidden max-md:block items-center text-[14px] font-medium"><FaGithub className="mr-[6px]" size={16} /></a>
                        <a href={Francis} className="hover:cursor-pointer flex items-center text-[15px]"><MdOutlineDownloading className="mx-1" />Download</a>
                    </div>
                </div>
                <div className="w-[95%] flex justify-between mt-3 max-md:flex-col">
                    <div className="w-[25%] max-md:w-full max-md:flex ">
                        <div className="max-md:hidden">
                            <a href="https://github.com/francisuzoigwe" className="flex items-center text-[14px] font-medium"><FaGithub className="mr-1" />francisuzoigwe </a>
                            <div className="text-[14px]">Lagos, Nigeria.</div>
                            <a href="mailto:kossyuzoigwe@gmail.com" className="text-[14px]" >kossyuzoigwe@gmail.com</a>
                        </div>
                        <div className="my-3 max-md:w-[45%] ">
                            <div className="font-bold  max-md:flex max-md:w-full">Core Technologies:</div>
                            {data?.map((el: any, i: any) => (
                                <p className="my-1 flex">
                                    <div className="inline-flex text-[14px]" key={i}><MdCheckBox className="mr-1 mt-1 min-w-[8px] min-h-[8px]" /> {el.tech}</div>
                                </p>
                            ))}
                        </div>
                        <div className="my-3 max-md:w-[45%]">
                            <div className="font-bold">Others:</div>
                            {other?.map((el: any, i: any) => (
                                <p className="my-1 flex">
                                    <div className="inline-flex text-[14px]" key={i}><MdCheckBox className="mr-1 mt-1 min-w-[8px] min-h-[8px]" /> {el.tech}</div>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="w-[73%] max-md:w-full">
                        <div className="text-[60px] max-md:text-[30px] max-md:leading-[30px] font-bold leading-[55px]">Francis Kossyrisochukwu Uzoigwe</div>
                        <div className="my-4 text-[20px] font-normal">Expert Frontend Developer & Ui/Ux Designer</div>
                        <div className="my-3 w-[85%] max-md:w-full text-gray-400 text-[14px]">
                            Experienced frontend developer proficient in optimizing web performance and ensuring cross-browser compatibility, with over 4 years of experience, known for developing scalable solutions and leading teams to deliver exceptional digital experience while staying ahead of the industry trends.
                        </div>
                        <div className="w-full my-3">
                            <hr className="w-full" />
                        </div>
                        <div className="font-bold">Experience:</div>
                        {experience?.map((el: any, index: number) => {
                            return (
                                <div key={index} className="my-6">
                                    <div className="flex justify-between items-center  ">
                                        <div className="flex items-center text-[14px] font-bold">
                                            {el.name}
                                            <div className="h-[2px] mt-1 mx-2 w-[15px] bg-gray-400" />
                                            {el.title} &nbsp;
                                            <div className="font-normal max-md:hidden">{el.location}</div>
                                        </div>
                                        <div className="text-[14px] max-md:hidden">{el.date}</div>
                                    </div>
                                    <div className="text-[14px] hidden max-md:flex">
                                        <div>{el.location} &nbsp;</div>{el.date}
                                    </div>
                                    {el.tasks?.map((task: string, taskIndex: number) => (
                                        <div key={taskIndex} className="flex text-[14px]">
                                            <div className={`h-[8px] min-w-[8px] mr-2 mt-[7px] rounded-sm border ${!visibility ? "bg-black" : "bg-white"}`} />
                                            {task}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume