import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 style={{ color: "yellow" }}>Welcome to React Learning...!</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <nav
          style={{
            backgroundColor: "gray",
            padding: "10px",
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link style={{ color: "white" }} to="/">
            Home
          </Link>
          <Link style={{ color: "white" }} to="/about">
            About
          </Link>
          <Link style={{ color: "white" }} to="/contact">
            Contact
          </Link>
          <Link style={{ color: "white" }} to="/users">
            Users
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
