import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className="homeContainer">
            <h2>This is module-45_4-5</h2>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;