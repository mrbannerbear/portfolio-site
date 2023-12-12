import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Resume from "../resume/Resume";
import Projects from "../projects/Projects";

const Router = new createBrowserRouter([
    {
        element: <Home></Home>,
        path: "/"
    },
    {
        element: <Resume></Resume>,
        path: "/resume"
    },
    {
        element: <Projects></Projects>,
        path: "/projects"
    },
])

export default Router