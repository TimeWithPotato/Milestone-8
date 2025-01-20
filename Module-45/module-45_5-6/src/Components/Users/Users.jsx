import { useLoaderData } from "react-router";
import User from "../User/User";
import "../Users/Users.css"

const Users = () => {
    const users = useLoaderData();
    // console.log(users)
    return (
        <div className="users_style">
            {
                users.map(user=><User key={user.id} user={user} />)
            }
        </div>
    );
};

export default Users;