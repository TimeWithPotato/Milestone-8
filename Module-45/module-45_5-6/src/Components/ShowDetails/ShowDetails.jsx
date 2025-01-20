import { useLoaderData } from "react-router";

const ShowDetails = () => {
    const userData = useLoaderData()
    const {name, address, phone, website } = userData
    const {street, city} = address
    // console.log(userData)
    return (
        <div>
            <h2>User Details of <span style={{ color: "red" }}>{name}</span></h2>
            <h1>Address
                <p>Street: {street}, City: {city}</p>
            </h1>
            <h1>Contact
                <p>phone: {phone}</p>
                <p>Website: {website}</p>
            </h1>
        </div>
    );
};

export default ShowDetails;