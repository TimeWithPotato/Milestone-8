import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <h5>This is module 46</h5>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;