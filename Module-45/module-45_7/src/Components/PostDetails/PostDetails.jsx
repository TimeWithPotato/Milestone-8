import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

    const postDetailsStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap:"10px"
    }
    const postData = useLoaderData();
    const {userId, title, body } = postData
    
    const navigate = useNavigate();
    const handleUserDetails = () => {
        navigate(`/users/${userId}`)
    }

    const handleGoBack = () => {
        navigate(-1);
    }

    const paramsPostID = useParams()
    console.log(paramsPostID)
    return (
        <div style={postDetailsStyle}>
            <h5 style={{ color: "red" }}>{title}</h5>
            <p style={{ color: "yellow" }}>{body}</p>
            <button onClick={handleUserDetails} >User Details</button>
            <button onClick={handleGoBack}>GO Back</button>
        </div>
    );
};

export default PostDetails;