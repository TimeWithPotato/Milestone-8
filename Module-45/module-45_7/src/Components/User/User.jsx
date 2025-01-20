import { useNavigate } from "react-router-dom";

const User = ({ userData }) => {

    const userStyle = {
        border:"2px solid white",
        borderRadius:"5px",
    }
    const { id, name, username, email } = userData;
    const navigate = useNavigate();
    
    const handleUserDetails = () => {
        navigate(`/users/${id}`);
    }
    return (
        <div style={userStyle}>
            <h3>Name: {name}
                <span style={{color:"yellow", marginLeft:"2px",marginRight:"2px", display:"block"}}>User-Name:</span>
                <span style={{color:"red", display:"inline-block"}}>{username}</span>
            </h3>
            <h5>ID: {id}</h5>
            <h6>Email: {email}</h6>
            <button onClick={handleUserDetails} style={{marginBottom:"10px"}}>Show Details</button>
        </div>
    );
};

export default User;