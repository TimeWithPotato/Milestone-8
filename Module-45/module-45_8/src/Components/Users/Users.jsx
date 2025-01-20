import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css"

const Users = () => {

    
    const usersData = useLoaderData();
    // console.log(usersData);
    return (
        <div className="usersStyle">
            {
                usersData.map((userData, idx)=><User key={idx} userData={userData} />)
            }
        </div>
    );
};

export default Users;