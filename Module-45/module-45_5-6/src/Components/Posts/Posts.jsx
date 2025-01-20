import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import  "../Posts/Posts.css"

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);
    return (
        <div className="postsStyle">
            {
                posts.map((post, idx)=><Post key={idx} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;