import {
    createBrowserRouter,
} from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Components/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);

export default router;