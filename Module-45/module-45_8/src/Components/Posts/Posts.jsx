import { useLoaderData } from "react-router-dom";
import "./Posts.css"
import Post from "../Post/Post";

const Posts = () => {

    const postsData = useLoaderData();
    return (
        <div className="postsStyle">
            {
                postsData.map((postData, idx)=><Post key={idx} postData={postData} />)
            }
        </div>
    );
};

export default Posts;