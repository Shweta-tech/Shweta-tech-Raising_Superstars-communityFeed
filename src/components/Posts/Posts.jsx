import React from "react";
import Post from "./Post/Post";
import './Posts.css'
const Posts = (data) => {
   
    return (
      <div className="posts md:w-1/2 w-full m-auto">
        { data.data.map(d=> <Post post={d} key={d.post._id}></Post>) }
      </div>
    );
  };
  
export default Posts;