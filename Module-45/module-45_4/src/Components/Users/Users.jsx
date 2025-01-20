import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1 style={{ color: "blue" }}>This is Users page..!</h1>
            <div className="users">
                {
                    users.map((user,idx)=><User key={idx} user={user}/>)
                }
            </div>
        </div>
    );
};

export default Users;