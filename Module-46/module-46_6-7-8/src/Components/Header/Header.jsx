import { NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav className="headerContainer">
                <NavLink to = '/simpleform'>Simple Form</NavLink>
                <NavLink to = '/statefullform'>Statefull Form</NavLink>
                <NavLink to = '/refform'>Reference Form</NavLink>
                <NavLink to = '/hookformarray'>Hook Form(array)</NavLink>
                <NavLink to = '/hookformobj'>Hook Form(obj)</NavLink>
                <NavLink to = '/signup'>SignUp</NavLink>
                <NavLink to = '/login'>Login</NavLink>
                <NavLink to = '/grandpa'>Grandpa</NavLink>
            </nav>
        </div>
    );
};

export default Header;