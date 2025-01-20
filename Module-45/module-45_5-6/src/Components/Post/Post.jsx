import { Link } from "react-router-dom";
const Post = ({ post }) => {
    const {userId, id, title, body } = post;
    const postStyle = {
        border:"2px solid red"
    }
    return (
        <div style={postStyle}>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;