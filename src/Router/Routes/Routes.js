import { createBrowserRouter } from "react-router-dom";
import Course from "../../Pages/Course/Course";
import CourseDeatls from "../../Pages/CourseDeatils/CourseDeatls";
import Enroll from "../../Pages/Enroll/Enroll";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";
import Regester from "../../Pages/Regester/Regester";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                loader: () => fetch("http://localhost:5000/course-categories"),
                element:<Home></Home>
            },
            {
                path:"/course",
                loader: () => fetch("http://localhost:5000/course-categories"),
                element:<Course></Course>,
                children:[
                    {
                        path:"/course/:id",
                        loader:({params}) => fetch(`http://localhost:5000/course/${params.id}`),
                        element:<CourseDeatls></CourseDeatls>
                    },
                ]
            },
            {
                path:"/enroll/:id",
                loader:({params}) => fetch(`http://localhost:5000/course/${params.id}`),
                element:<PrivateRoute><Enroll></Enroll></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/regester",
                element:<Regester></Regester>
            }
        ]
    }
])

export default router;