import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div>
            <nav style={{display:"flex", justifyContent:"space-between"}}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
            </nav>
        </div>
    );
};

export default Header;