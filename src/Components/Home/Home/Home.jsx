import FetureHero from "../FetureHero/FetureHero";
import FeturesHeros from "../FetureHero/FeturesHeros";
import Toys from "../Toys/Toys";
import Bannar from "./Banner/Bannar";
import Gallarey from "./Gallarey/Gallarey";


const Home = () => {
    return (
        <div className="">
            <Bannar />
            <Gallarey />
            {/* <Toys /> */}
            <FeturesHeros />

        </div>
    );
};

export default Home;