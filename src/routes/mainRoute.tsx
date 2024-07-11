
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Errors from "../errors/Errors";
import Home from "../page/home/Home";
import Page from "../page/about/Page";
import Experience from "../page/experience/Experience";
import Projects from "../page/projects/Projects";
import Contact from "../page/contact/Contact";
import Resume from "../page/resume/Resume";
import SingularProject from "../page/projects/SingularProject";

export const mainRoute = createBrowserRouter([
    
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <Page />
            },
            {
                path: "/resume",
                element: <Resume />
            },
            {
                path: "/experience",
                element: <Experience />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/projects/:projectID",
                element: <SingularProject />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
    {
        path: "*",
        element: <Errors />
    }
])