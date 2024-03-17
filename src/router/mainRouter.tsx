import { createBrowserRouter } from "react-router-dom";
import GlobalFile from "../global/GlobalFile";

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <GlobalFile />
    }
])