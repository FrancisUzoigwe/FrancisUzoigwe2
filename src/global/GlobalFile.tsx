import About from "../pages/About"
import MainPage from "../pages/MainPage"
import Projects from "../pages/Projects"
import ContactPage from "../pages/ContactPage"
import "../pages/body.css"

const GlobalFile = () => {
    return (
        <div>
            <MainPage />
            <About />
            <Projects />
            <ContactPage />
        </div>
    )
}

export default GlobalFile