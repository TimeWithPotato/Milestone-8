import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="headerStyle">
                <NavLink to = '/simpleform'>Simple Form</NavLink>
                <NavLink to ='/statefullform'>Statefull Form</NavLink>
                <NavLink to = '/refform'>Reference Form</NavLink>
            </nav>
        </div>
    );
};

export default Header;