import { NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav className="navContainer">
                <NavLink to = '/simpleform'>Simple Form</NavLink>
                <NavLink to = '/statefullform'>Statefull Form</NavLink>
                <NavLink to = '/refform'>Ref Form</NavLink>
                <NavLink to = '/hookformarray'>Hook Form (Array)</NavLink>
                <NavLink to = '/hookformobj'>Hook Form (Obj)</NavLink>
                <NavLink to = '/signup'>Sign up</NavLink>
                <NavLink to = '/updateprofile'>Update Profile</NavLink>
            </nav>
        </div>
    );
};

export default Header;