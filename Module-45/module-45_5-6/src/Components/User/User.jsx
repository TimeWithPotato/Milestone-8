import { Link } from "react-router-dom";

const User = ({ user }) => {
    const {id, name, email} = user
    return (
        <div style={{border:"2px solid yellow"}}>
            <h3>ID: {id}</h3>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;