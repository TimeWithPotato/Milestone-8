import { Link } from 'react-router-dom';
import "./Header.css";
const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    );
};
export default Header;