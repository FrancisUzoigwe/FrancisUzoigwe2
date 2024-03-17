import About from "../pages/About"
import MainPage from "../pages/MainPage"
import Projects from "../pages/Projects"
import "../pages/body.css"

const GlobalFile = () => {
    return (
        <div>
            <MainPage />
            <About />
            <Projects />
        </div>
    )
}

export default GlobalFile