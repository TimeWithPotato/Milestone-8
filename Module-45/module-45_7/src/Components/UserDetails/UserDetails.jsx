import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const userDetailsData = useLoaderData()
    const {
        name = "N/A",
        username = "N/A",
        email = "N/A",
        phone = "N/A",
        address = {},
        website = "N/A",
        company = {}
    } = userDetailsData || {};

    const {
        street = "N/A",
        city = "N/A",
    } = address || {};

    const { name: nameCompany = "N/A" } = company
    
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    // console.log(userDetailsData)
    return (
        <div>
            <h3>Name: {name}
                <span style={{display:"block", color:"yellow"}}>Username: <span style={{color:"red"}}>{username}</span></span>
            </h3>
            <h3>Address:
                <span style={{ display: "block", color: "green" }}>Street: {street}</span>
                <span style={{display:"block", color:"burlywood"}}>City: {city}</span>
            </h3>
            <p><span style={{ color: "greenyellow", }}>Company:</span> {nameCompany}</p>
            <h5><span style={{ color: "red" }}>Emai:</span> {email}</h5>
            <h5><span style={{ color: "red" }}>Website:</span> {website}</h5>
            <h5><span style={{ color: "red" }}>Phone:</span> {phone}</h5>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;