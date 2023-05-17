import {
    createBrowserRouter,
} from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Components/Home/Home/Home";
import AddToys from "../Components/Pages/AddToys/AddToys";

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
        ]
    },
]);

export default router;