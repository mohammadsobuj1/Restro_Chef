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
                element: <ViewDetailes />,
                loader: ({ params }) => fetch(`https://assainment-11-sarver.vercel.app/detailes/${params.id}`)
            }

        ]
    },
]);

export default router;