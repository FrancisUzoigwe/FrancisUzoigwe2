import React from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "../../index.css";
import Francis from "../../FrancisKossyrisochukwuUzoigwe.pdf";
import { useSelector } from "react-redux";



const Home: React.FC = () => {
    const visibility = useSelector((state: any) => state.visibility);
    useGSAP(() => {
        gsap.to("#title", { opacity: 1, delay: 1 });
        gsap.to("#sub", { opacity: 1, delay: 2, y: 0 });
        gsap.to("#btn", { opacity: 1, delay: 4, y: 0 });
        gsap.to("#first", { opacity: 1, stagger: 0.1, x: 0, delay: 1.5 });
        gsap.to("#animate", { opacity: 1, stagger: 0.2, x: 0, delay: 5 });
    }, []);

    return (
        <>
            <div className="w-full h-[calc(100vh-55px)] flex flex-col items-center">
                <div className="my-4" />
                <div
                    className="gradient-hover text-[50px] max-md:w-full max-md:flex max-md:justify-center max-md:text-center max-md:text-[35px] font-black opacity-0"
                    id="title"
                >
                    <span id='first' className="opacity-0 translate-x-4" data-char="F">F</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="r">r</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="o">o</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="n">n</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="t">t</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="e">e</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="n">n</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="d">d</span>
                    <span>&nbsp;</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="D">D</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="e">e</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="v">v</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="e">e</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="l">l</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="o">o</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="p">p</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="e">e</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char="r">r</span>
                    <span id="first" className="opacity-0 translate-x-4" data-char=".">.</span>
                </div>
                <div
                    id="sub"
                    className="opacity-0 translate-y-4 my-2 transition-all duration-300 text-center font-normal text-[14px] w-[98%] md:w-[45%]"
                >
                    `From the vibrant heart of Lagos, Nigeria, to the forefront of cutting-edge digital experiences, I transform vision into reality as a Frontend Developer. Driven by passion and precision, I elevate every project to new heights of excellence.`
                </div>
                <div className="my-3" />
                <div>
                    <a href={Francis}>
                        <button
                            id="btn"
                            className={`text-[14px] px-4 py-2 rounded-md border ${visibility ? "hover:shadow-sm border-white" : "border-black"
                                } opacity-0 translate-y-4`}
                        >
                            See Résumé
                        </button>
                    </a>
                </div>
                <div className='my-5' />
                <div className='flex '>
                    {/* F */}
                    <div className='flex mx-3'>
                        <div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                        </div>
                        <div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div id='animate'  className= 'opacity-0 w-[20px] translate-y-5 rounded-md h-[20px]'></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                        </div>
                        <div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div id='animate'  className= 'opacity-0 w-[20px] translate-y-5 rounded-md h-[20px]'></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                        </div>
                        <div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div id='animate'  className= 'opacity-0 w-[20px] translate-y-5  rounded-md h-[20px]'></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                        </div>
                    </div>
                    {/* U */}
                    <div className='flex mx-3'>
                        <div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ml-[17px] ${!visibility ? "border border-black" : "border border-white"} rounded-md h-[20px] `}></div>
                        </div>
                        <div className=''>
                            <div id='animate'  className= 'opacity-0 w-[20px] translate-y-5  rounded-md h-[20px]'></div>
                            <div id='animate'  className= 'opacity-0 w-[20px] translate-y-5  rounded-md h-[20px]'></div>
                            <div id='animate'  className= 'opacity-0 w-[20px] translate-y-5  rounded-md h-[20px]'></div>
                            <div id='animate'  className= 'opacity-0 w-[20px] translate-y-5  rounded-md h-[20px]'></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ml-[24px] ${!visibility ? "border border-black " : "border border-white"} rounded-md h-[20px] `}></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 -mt-1  ml-[2px] ${!visibility ? "border border-black " : "border border-white"} rounded-md h-[20px]`}></div>
                        </div>
                        <div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                            <div  id='animate' className={ `opacity-0 w-[20px] translate-y-5 ${!visibility ? " border border-black" : "border border-white"} rounded-md h-[20px]`}></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
