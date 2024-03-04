import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import MainPage from "../pages/MainPage"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <MainPage />
            }
        ]
    }
])