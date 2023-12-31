import {
    createBrowserRouter,
} from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Components/Home/Home/Home";
import AddToys from "../Components/Pages/AddToys/AddToys";
import Registration from "../Components/Pages/Registration/Registration";
import Login from "../Components/Pages/Login/Login";
import MyToys from "../Components/Pages/MyToys/MyToys";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AllToys from "../Components/Pages/AllToys/AllToys";
import ViewDetailes from "../Components/Home/Home/ViewDetailes/ViewDetailes";
import UpdateData from "../Components/Pages/UpdateData/UpdateData";
import DynamicTytile from "../Components/Pages/DyanamicTitle/DynamicTytile";
import Error from "../Components/Pages/Error/Error";
import Bologs from "../Components/Pages/Blogs/Bologs";

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
                element: <PrivetRoute><AddToys /></PrivetRoute>
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
                element: <PrivetRoute><MyToys /></PrivetRoute>,

            },
            {
                path: "/alltoys",
                element: <AllToys />,
                loader: () => fetch('https://assainment-11-sarver.vercel.app/alltoys')
            },
            {
                path: "detailes/:id",
                element: <PrivetRoute><ViewDetailes /></PrivetRoute>,
                loader: ({ params }) => fetch(`https://assainment-11-sarver.vercel.app/detailes/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <UpdateData />,
                loader: ({ params }) => fetch(`https://assainment-11-sarver.vercel.app/detailes/${params.id}`)
            },
            {
                path: "/title",
                element: <DynamicTytile />
            },
            {
                path: "/bolg",
                element: <Bologs />
            }

        ],

    },
    {
        path: "*",
        element: <Error />
    }
]);

export default router;