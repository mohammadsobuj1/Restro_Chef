import { Outlet } from "react-router-dom";
import Header from "../Components/Pages/Header/Header";
import Footer from "../Components/Pages/Footer/Footer";


const LayOut = () => {
    return (
        <div >
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default LayOut;