import React from "react"
import { Link } from "react-router-dom";

interface iCards {
    bg?: string;
    text?: string;
    textColor?: string;
    description?: string;
    live?: string;
    liveLink?: string;
    github?: string;
    githubLink?: string;
    image?: string;
    descriptionColor?: string;
}

const Cards: React.FC<iCards> = ({ bg, text, description, live, github, image, textColor, descriptionColor, liveLink, githubLink }) => {
    return (
        <>
            <div className="min-h-[300px]  rounded-lg hover:cursor-pointer relative border">
                <div className={`absolute  opacity-0 hover:opacity-100 w-full h-full transition-all duration-300 rounded-lg ease-linear flex flex-col items-center justify-center ${bg}`}>
                    <div className={`my-4 text-[20px] font-black ${textColor}`}>{text}</div>
                    <div className={`w-[95%] text-center ${descriptionColor}`}>
                        {description}
                    </div>
                    <div className="flex  my-4 pb-3">
                        <Link to={`${liveLink}`}>
                            <div className={`mx-4  ${live}`}>Live Preview </div>
                        </Link>
                        <Link to={`${githubLink}`}>
                            <div className={`mx-4  ${github}`}>GitHub</div>
                        </Link>
                    </div>
                </div>
                <img src={`${image}`} alt="" className="border-none w-full h-full rounded-lg object-left object-cover" />
            </div>
        </>
    )
}

export default Cards