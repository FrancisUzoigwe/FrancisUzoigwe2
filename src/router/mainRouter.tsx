import { createBrowserRouter } from "react-router-dom";
import GlobalFile from "../global/GlobalFile";
import HandleError from "../pages/error/HandleError";

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <GlobalFile />
    },
    {
        path: "*",
        element: <HandleError />
    }
])