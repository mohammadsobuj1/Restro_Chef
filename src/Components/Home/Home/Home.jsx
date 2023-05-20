import FetureHero from "../FetureHero/FetureHero";
import Toys from "../Toys/Toys";
import Bannar from "./Banner/Bannar";
import Gallarey from "./Gallarey/Gallarey";


const Home = () => {
    return (
        <div className="">
            <Bannar />
            <Gallarey />
            <Toys />
            <FetureHero />

        </div>
    );
};

export default Home;