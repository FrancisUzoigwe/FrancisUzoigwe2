import About from "../pages/About"
import MainPage from "../pages/MainPage"
import Projects from "../pages/Projects"
import ContactPage from "../pages/ContactPage"
import "../pages/body.css"
import Skills from "../pages/Skills"

const GlobalFile = () => {
    return (
        <div>
            <MainPage />
            <About />
            <Skills />
            <Projects />
            <ContactPage />
        </div>
    )
}

export default GlobalFile