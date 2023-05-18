import {
    createBrowserRouter,
} from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Components/Home/Home/Home";
import AddToys from "../Components/Pages/AddToys/AddToys";
import Registration from "../Components/Pages/Registration/Registration";
import Login from "../Components/Pages/Login/Login";
import MyToys from "../Components/Pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/addtoys",
                element: <AddToys />
            },
            {
                path: "/registration",
                element: <Registration />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: '/mytoys',
                element: <MyToys />,
                loader:()=>fetch('http://localhost:5000/alltoys')
            }
        ]
    },
]);

export default router;