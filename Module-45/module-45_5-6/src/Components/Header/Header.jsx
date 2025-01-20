import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>NavBar</h2>
            <nav style={{display: "flex", justifyContent: "space-around"}}>
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/contact">Contact</Link>
                <Link to = "/users">User</Link>
                <Link to = "/posts">Posts</Link>
            </nav>
        </div>
    );
};

export default Header;