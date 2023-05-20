import DynamicTytile from "../../Pages/DyanamicTitle/DynamicTytile";
import FeturesHeros from "../FetureHero/FeturesHeros";
import Gallarey from "../Gallarey/Gallarey";
import Toys from "../Toys/Toys";
import Bannar from "./Banner/Bannar";
import Exhibition from "./Exhibition/Exhibition";



const Home = () => {

    return (
        <div className="">
            <DynamicTytile title="Home" />
            <Bannar />
            <Gallarey />
            <Toys />
            <Exhibition />
            <FeturesHeros />

        </div>
    );
};

export default Home;