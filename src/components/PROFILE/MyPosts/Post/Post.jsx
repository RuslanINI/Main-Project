import React from "react";
import PostsStyle from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={PostsStyle.item}>
      <div>
        <img src="https://yt3.ggpht.com/ytc/AAUvwnjKegYIsDwyaFMPev-B6mhod9KBEjWS9Ci7pQTXRQ=s900-c-k-c0x00ffffff-no-rj"></img>
        <div className={PostsStyle.post}>{props.textPost}</div>
      </div>
      <div>
        <button className={PostsStyle.like}>
          {"like" + " " + props.likesCount}
        </button>
      </div>
    </div>
  );
};

export default Post;
