import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";
import Regester from "../../Pages/Regester/Regester";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
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