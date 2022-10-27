import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import CourseDeatls from "../../Pages/CourseDeatils/CourseDeatls";
import Enroll from "../../Pages/Enroll/Enroll";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";
import Page404 from "../../Pages/Page404/Page404";
import Regester from "../../Pages/Regester/Regester";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                loader: () => fetch("https://web-application-learn-server.vercel.app/course-categories"),
                element:<Home></Home>
            },
            {
                path:"/course",
                loader: () => fetch("https://web-application-learn-server.vercel.app/course-categories"),
                element:<Course></Course>,
                children:[
                    {
                        path:"/course/:id",
                        loader:({params}) => fetch(`https://web-application-learn-server.vercel.app/course/${params.id}`),
                        element:<CourseDeatls></CourseDeatls>
                    },
                ]
            },
            {
                path:"/enroll/:id",
                loader:({params}) => fetch(`https://web-application-learn-server.vercel.app/course/${params.id}`),
                element:<PrivateRoute><Enroll></Enroll></PrivateRoute>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/regester",
                element:<Regester></Regester>
            },
            {
                path:"*",
                element: <Page404></Page404>
                
            }
        ]
    }
])

export default router;