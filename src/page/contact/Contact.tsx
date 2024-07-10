import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { gsap, Power1 } from "gsap";
import { useGSAP } from "@gsap/react";


const Contact = () => {
    const visibility = useSelector((state: any) => state.visibility);

    const form: any = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [isSending, setIsSending] = useState(false);

    useGSAP(() => {
        gsap.to("#inp", { y: 0, opacity: 1, delay: 0, stagger: 0.8 })
        if (isSending) {
            const tl = gsap.timeline({ repeat: -1 });
            tl.fromTo(
                "#loader .border",
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, stagger: 0.2, duration: 0.5, ease: Power1.easeInOut }
            );
        }
    }, [isSending]);

    const sendEmail = (e: any) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm('service_revi8x4', 'template_o2o3fjt', form.current, {
            publicKey: 'yT1FYsOKm4Q75Q1NL',
        })
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    setIsSending(false);
                },
                (error: any) => {
                    toast.error(`Error occurred: ${error?.text}`);
                    setIsSending(false);
                }
            );
    };

    useEffect(() => {
        setIsButtonActive(name.trim() !== "" && email.trim() !== "" && message.trim() !== "");
    }, [name, email, message]);

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
                                onChange={(e) => setName(e.target.value)}
                                className={` opacity-0 translate-y-6 w-full h-[45px] rounded-md pl-4 outline-none ${visibility ? "bg-black text-white border border-white placeholder:text-white" : "placeholder:text-black bg-white text-black border border-black"}`}
                                placeholder="Name"
                            />
                        </div>
                        <div className="mt-4">
                            <input
                                id="inp"
                                type="text"
                                autoComplete="off"
                                name="from_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={` opacity-0 translate-y-6 w-full h-[45px] rounded-md pl-4 outline-none ${visibility ? "bg-black text-white border border-white placeholder:text-white" : "placeholder:text-black bg-white text-black border border-black"}`}
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="mt-4">
                            <textarea
                                id="inp"
                                name="message"
                                value={message}
                                autoComplete="off"
                                onChange={(e) => setMessage(e.target.value)}
                                className={`opacity-0 translate-y-6 w-full min-h-[100px] rounded-md pl-4 outline-none ${visibility ? "bg-black text-white border border-white placeholder:text-white" : "placeholder:text-black bg-white text-black border border-black"}`}
                                placeholder="Hi, we need a Frontend developer to rebrand our website  at Company X. How soon can you hop on to discuss this?"
                            />
                        </div>
                        <div id="inp" className="w-full flex justify-center mt-3 opacity-0 translate-y-6">
                            <button
                                type="submit"
                                disabled={!isButtonActive || isSending}
                                className={`   w-full rounded-md h-[50px] items-center justify-center ${!visibility ? "bg-black text-white" : "bg-white text-black"} ${(!isButtonActive || isSending) && "opacity-50 cursor-not-allowed"}`}
                            >
                                {isSending ? (
                                    <div id="loader" className="w-full flex items-center justify-center h-full gap-1">
                                        <div className={`w-[8px] h-[8px] rounded-sm border ${visibility ? "border-black " : "border-white"}`}></div>
                                        <div className={`w-[8px] h-[8px] rounded-sm border ${visibility ? "border-black " : "border-white"}`}></div>
                                        <div className={`w-[8px] h-[8px] rounded-sm border ${visibility ? "border-black " : "border-white"}`}></div>
                                        <div className={`w-[8px] h-[8px] rounded-sm border ${visibility ? "border-black " : "border-white"}`}></div>
                                    </div>
                                ) : (
                                    "Send"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center font-bold w-[90%] ">
                    <hr className="w-[50%] " />
                    <span className={`  ${visibility ? "px-4 bg-black text-white" : "px-4 bg-white"}`}>OR</span>
                    <hr className="w-[50%]" />
                </div>

            </form>
        </>
    );
};

export default Contact;
