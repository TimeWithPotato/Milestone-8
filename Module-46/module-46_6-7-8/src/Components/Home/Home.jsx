import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.css"
const Home = () => {
    return (
        <div>
            <h2>Module 46:6-7-8</h2>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;