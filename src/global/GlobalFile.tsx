import About from "../pages/About"
import MainPage from "../pages/MainPage"
import Projects from "../pages/Projects"
import ContactPage from "../pages/ContactPage"
import "../pages/body.css"
import Skills from "../pages/Skills"
import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-scroll"



const Arrow = () => {
    const [scroll, setScroll] = useState<boolean>(false)
    const onScroll = () => {
        if (window.scrollY >= 20) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener("scroll", onScroll)
    return <>
        <div className="fixed right-6 bottom-12 w-[45px] h-[45px] rounded-full flex items-center text-white justify-center bg-[blue] animate-bounce hover:cursor-pointer z-[200]">
            {
                scroll ? <Link to="home" duration={5000} smooth={true}>
                    <FaArrowUp />
                </Link> : <Link to="contact" duration={5000} smooth={true}>
                    <FaArrowDown />
                </Link>
            }
        </div>
    </>
}

const GlobalFile = () => {
    return (
        <div>
            <Arrow />
            <MainPage />
            <About />
            <Skills />
            <Projects />
            <ContactPage />
        </div>
    )
}

export default GlobalFile