import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    const visibility = useSelector((state: any) => state.visibility);
    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState<boolean>(false);
    const [activeButton, setActiveButton] = useState<boolean>(false)

    const form: any = useRef();
    useGSAP(() => {
        gsap.fromTo("#inp", { y: 30, opacity: 0 }, { opacity: 1, y: 0, delay: 0, stagger: 0.5 })
        gsap.fromTo("#links", { y: 35, opacity: 0 }, { y: 0, opacity: 1, delay: 1.5, stagger: 0.4 })
        gsap.fromTo("#reserve", { y: 30, opacity: 0, delay: 0, stagger: 0.4 }, { y: 0, opacity: 1, delay: 3, stagger: 0.4 })
        const animate = gsap.timeline({ repeat: -1 })
        animate.fromTo("#loader .border", { opacity: 0, x: 20 }, { opacity: 1, x: 0, stagger: 0.2, delay: 0.4 })
    }, []);

    useEffect(() => {
        if (name.trim() !== "" && emailAddress.trim() !== "" && message.trim() !== "") {
            setActiveButton(true)
        } else {
            setActiveButton(false)
        }
    }, [name, emailAddress, message])

    const sendEmail = (e: any) => {
        e.preventDefault();
        setIsSending(true)
        emailjs.sendForm('service_revi8x4', 'template_o2o3fjt', form.current, {
            publicKey: 'yT1FYsOKm4Q75Q1NL',
        })
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    setIsSending(false);
                },
                (error: any) => {
                    toast.error(`Error occurred: ${error?.message}`);
                    setIsSending(false)
                }
            );
    };
    return (
        <>
            <Toaster />
            <form ref={form} onSubmit={sendEmail} id="contact" className='w-full min-h-[calc(100vh-55px)] flex flex-col items-center'>
                <div className="my-5 font-medium text-[20px] max-md:w-[90%] max-md:text-center max-md:text-[16px]">
                    Got a question or proposal, or just want to say hello? Go ahead.
                </div>
                <div className="w-[90%] max-md:flex-col h-auto flex justify-center">
                    <div className="mx-16 max-md:mx-0 w-[400px] max-md:w-full h-[400px] rounded-md">
                        <img src="http://res.cloudinary.com/dhu54k4vh/image/upload/v1720632512/o3zvs4syxjrhdqeir8rk.png" className="w-[400px] h-[400px] object-cover rounded-md overflow-hidden" loading="lazy" alt="" />
                    </div>
                    <div className="mx-16  w-[400px] max-md:w-full h-auto max-md:mx-0">
                        <div className="font-bold my-4">Get in touch!</div>
                        <div className="my-1">
                            <input
                                id="inp"
                                autoComplete="off"
                                type="text"
                                name="from_name"
                                value={name}
                                onChange={(e: any) => {
                                    setName(e.target.value)
                                }}
                                className={` opacity-0 w-full h-[45px] rounded-md pl-4 outline-none ${visibility ? "bg-black text-white border border-white placeholder:text-white" : "placeholder:text-black bg-white text-black border border-black"}`}
                                placeholder="Name"
                            />
                        </div>
                        <div className="mt-4">
                            <input
                                id="inp"
                                type="text"
                                autoComplete="off"
                                name="from_email"
                                value={emailAddress}
                                onChange={(e: any) => { setEmailAddress(e.target.value) }}
                                className={` opacity-0 w-full h-[45px] rounded-md pl-4 outline-none ${visibility ? "bg-black text-white border border-white placeholder:text-white" : "placeholder:text-black bg-white text-black border border-black"}`}
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="mt-4">
                            <textarea
                                id="inp"
                                name="message"
                                autoComplete="off"
                                value={message}
                                onChange={(e: any) => {
                                    setMessage(e.target.value)
                                }}
                                className={`opacity-0 w-full min-h-[100px] rounded-md pl-4 outline-none ${visibility ? "bg-black text-white border border-white placeholder:text-white" : "placeholder:text-black bg-white text-black border border-black"}`}
                                placeholder="Hi, we need a Frontend developer to rebrand our website  at Company X. How soon can you hop on to discuss this?"
                            />
                        </div>
                        <div id="inp" className="w-full flex justify-center mt-3 opacity-0">
                            <button
                                type="submit"
                                disabled={!activeButton}
                                className={` ${!activeButton ? "bg-gray-400 hover:cursor-not-allowed" : "bg-black cursor-pointer"} transition-all duration-300  w-full rounded-md h-[50px] items-center justify-center ${!visibility ? "bg-black text-white" : "bg-white text-black"}`}
                            >
                                {isSending ? <div id="loader" className="w-full flex items-center justify-center h-full gap-1">
                                    <div className={`w-[8px] h-[8px] rounded-sm border ${visibility ? "border-black " : "border-white"}`}></div>
                                    <div className={`w-[8px] h-[8px] rounded-sm border ${visibility ? "border-black " : "border-white"}`}></div>
                                    <div className={`w-[8px] h-[8px] rounded-sm border ${visibility ? "border-black " : "border-white"}`}></div>
                                    <div className={`w-[8px] h-[8px] rounded-sm border ${visibility ? "border-black " : "border-white"}`}></div>
                                    <div className={`w-[8px] h-[8px] rounded-sm border ${visibility ? "border-black " : "border-white"}`}></div>
                                </div> : "Send"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center font-bold w-[90%] mt-2 ">
                    <hr className="w-[50%] " />
                    <span className={` ${visibility ? "px-4 bg-black text-white" : "px-4 bg-white"}`}>OR</span>
                    <hr className="w-[50%]" />
                </div>
                <a href="https://wa.me/+2347047474886" className=" animate-bounce rounded-full fixed bottom-10 right-10">
                    <FaWhatsapp className={`text-4xl   ${!visibility ? "text-black" : "text-[green]"}`} />
                </a>
                <div className="max-md:w-[60%] mt-5 w-[30%] flex items-center justify-evenly">
                    <a id="links" className="opacity-0" href="https://github.com/francisuzoigwe">
                        <FaGithub size={25} />
                    </a>
                    <a id="links" className="opacity-0" href="https://linkedin.com/in/francis-uzoigwe">
                        <FaLinkedin size={25} />
                    </a>
                    <a id="links" className="opacity-0" href="https://twitter.com/francisuzoigwe1">
                        <FaXTwitter size={25} />
                    </a>
                </div>
                <div id="links" className="opacity-0 text-[14px] mt-[10px] max-md:w-[90%] text-center ">You can find the source code on <a href="https://github.com/francisuzoigwe/francisuzoigwe2" className="underline font-semibold">GitHub</a>, don't forget to leave a star ⭐⭐</div>
                <div id="reserve" className="opacity-0 my-2 text-[14px] ">&copy; {new Date().getFullYear()} <a href="https://francisuzoigwee.web.app">Francis Uzoigwe</a>. All rights reserved.</div>
            </form>
        </>
    );
};

export default Contact;
