import { Link, NavLink } from "react-router-dom"
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav style={{ display: "flex", justifyContent: "space-between" }}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;