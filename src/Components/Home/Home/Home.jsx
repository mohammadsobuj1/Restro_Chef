import Toys from "../Toys/Toys";
import Bannar from "./Banner/Bannar";
// import Gallarey from "./Gallarey/Gallarey";


const Home = () => {
    return (
        <div>
            <Bannar />
            {/* <Gallarey /> */}
            <Toys />

        </div>
    );
};

export default Home;