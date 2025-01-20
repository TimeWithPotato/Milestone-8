import { useNavigate } from "react-router-dom";

const Post = ({ postData }) => {
    // console.log(postData)
    const { id, title } = postData
    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/posts/${id}`)
    }
    return (
        <div style={{border:"2px solid white", borderRadius:"30px"}}>
            <h5><span style={{ color: "red" }}>PostID:</span> {id}</h5>
            <p>Title: {title}</p>
            <button onClick={handleShowDetails}>Show Post Details</button>
        </div>
    );
};

export default Post;