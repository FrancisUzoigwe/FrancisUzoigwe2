import React from "react";
import { FaLink } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { Link } from "react-router-dom";

interface iCard {
    github?: string;
    url?: string;
    image?: any;
    name?: any;
    style?: string;
    description?: any;
    show?: string;
}


const Cards: React.FC<iCard> = ({ github, url, image, name, description, style, show }) => {
    return (
        <>
            <div className="border min-h-[400px] flex flex-col items-center rounded-lg pb-4 bg-white">
                <div className="w-[90%]  h-[200px] rounded-lg mt-5 relative ">
                    <Link to={`${github}`}>
                        <div className={`absolute top-3 -left-3 w-[55px] h-[55px] border rounded-full flex items-center justify-center bg-black text-white hover:cursor-pointer ${show}`}><FaGithub className="text-2xl" /></div>
                    </Link>
                    <Link to={`${url}`}>
                        <div className="absolute top-3 -right-3 w-[55px] h-[55px] border rounded-full flex items-center justify-center bg-black text-white hover:cursor-pointer"><FaLink /></div>
                    </Link>
                    <img src={image} alt="Image" loading="lazy" className={`w-full h-full  ${style}`} />
                </div>
                <div className="w-[90%] font-black text-[20px] my-3">{name}</div>
                <div className="w-[90%] text-[15px] ">
                    {description}
                </div>
            </div>
        </>
    )
}

export default Cards