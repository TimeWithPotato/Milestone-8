import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <h1>This is Home...!</h1>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;