import { useLoaderData, useNavigate, Link } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData()
    const {userId, id, title, body} = postDetails
    return (
        <div>
            <h3>Post ID: {id}</h3>
            <h2>Title: {title}</h2>
            <p>{body}</p>
            <Link to={`/users/${id}`}>Show User Details</Link>
        </div>
    );
};

export default PostDetails;