
import emailjs from '@emailjs/browser';
import { useState, useRef } from "react"
import Swal from "sweetalert2"
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaSkype, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
const ContactPage = () => {

    const form: any = useRef();
    const [formValid, setFormValid] = useState(false);

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm('service_revi8x4', 'template_o2o3fjt', form.current, {
                publicKey: 'yT1FYsOKm4Q75Q1NL',
            })
            .then(
                () => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Mail successfully sent! 📤📩",
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
                (error: any) => {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Error occured",
                        text: `${error?.text}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
            );
    };

    const checkFormValidity: any = () => {
        const inputs = form.current.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach((input: any) => {
            if (input.required && !input.value.trim()) {
                isValid = false;
            }
        });

        setFormValid(isValid);
    };

    return (
        <div className="w-full min-h-[70vh] bg-[#f0f3f5] flex flex-col items-center" id="contact">
            <div className="text-[20px] max-md:text-[17px] uppercase font-bold my-10">Contact</div>
            <div className="w-[40%] max-md:w-[80%]  flex justify-between items-center my-1">
                <a className='p-2 rounded-xl bg-white' href='https://web.facebook.com/FrancisUzoigwe.28'><FaFacebookF className="text-2xl text-[blue]" /></a>
                <a className='p-2 rounded-xl bg-white' href='https://www.instagram.com/francisuzoigwe.28/'><FaInstagram className="text-2xl text-[red]" /></a>
                <a className='p-2 rounded-xl bg-white' href='https://twitter.com/francisuzoigwe1'><FaXTwitter className="text-2xl text-[black]" /></a>
                <a className='p-2 rounded-xl bg-white' href='https://github.com/FrancisUzoigwe'><FaGithub className="text-2xl text-[black]" /></a>
                <a className='p-2 rounded-xl bg-white' href='https://join.skype.com/invite/G5CJcsoJjwdj'><FaSkype className="text-2xl text-[blue]" /></a>
                <a className='p-2 rounded-xl bg-white' href='https://www.linkedin.com/in/francis-uzoigwe-2b3b9b246'><FaLinkedin className="text-2xl  text-[blue]" /></a>
                <a className='p-2 rounded-xl bg-white' href='https://wa.link/gbbhu1'><FaWhatsapp className="text-2xl  text-[green]" /></a>
            </div>
            <div className="w-[90%]">
                <form ref={form} onSubmit={sendEmail} className="w-full  rounded-lg h-auto">
                    <div className="w-full flex justify-between max-md:flex-col items-center">
                        <div className="w-[47%]  max-md:w-full h-[50px] mt-5">
                            <label
                                htmlFor="Name"
                                className="relative h-full block rounded-md border border-black shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-blue-400"
                            >
                                <input
                                    type="text"
                                    name="from_name"
                                    required={true}
                                    className="peer pl-3 h-full w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Name"
                                    onChange={checkFormValidity}
                                />

                                <span
                                    className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 
                                    } p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs bg-[#F0F3F5]`}
                                >
                                    Name
                                </span>
                            </label>
                        </div>
                        <div className="w-[47%]  max-md:w-full h-[50px] mt-5">
                            <label
                                htmlFor="EmailAddress"
                                className="relative h-full block rounded-md border border-black focus-within:border-white focus-within:ring-1 focus-within:ring-blue-400  "
                            >
                                <input
                                    type="text"
                                    name="from_email"
                                    required={true}
                                    className="peer pl-3 h-full w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Username"
                                    onChange={checkFormValidity}
                                />

                                <span
                                    className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 
                                    } p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs bg-[#F0F3F5]`}
                                >
                                    EmailAddress
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="w-full  auto mt-5">
                        <label
                            className="relative h-full block rounded-md border border-black shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-blue-400"
                        >
                            <textarea
                                id="Message"
                                name="message" required={true}
                                className="peer pl-3 min-h-[50px] w-full mt-1 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="Username"
                                onChange={checkFormValidity}
                            />

                            <span
                                className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 
                                } p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs bg-[#F0F3F5]`}
                            >
                                Write Message Here
                            </span>
                        </label>
                    </div>
                    <div className="w-full items-center flex justify-start mt-3">
                        <button type="submit" disabled={!formValid} className={`px-5 hover:scale-[1.01] hover:cursor-pointer h-[45px]  transition duration-300 py-2 rounded-md w-full  ${formValid ? 'bg-black text-white' : 'bg-gray-300 text-gray-500'}`} >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className='w-[80%] flex items-center justify-center my-1 text-[14px]'>Francis Uzoigwe 2020-2024</div>
        </div>
    )
}

export default ContactPage

