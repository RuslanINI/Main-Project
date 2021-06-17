import React from "react";
import PostsStyle from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  NewPostActionCreator,
  UpdateActionCreator,
} from "../../../Redux/State";

 const MyPosts = (props) => {
  let postsElements = props.PostsData.map((allPosts) => (
    <Post
      id={allPosts.id}
      textPost={allPosts.textPost}
      likesCount={allPosts.likesCount}
    />
  ));

  let AddPostFunction = React.createRef();

  let NewPost = () => {
    props.dispatch(NewPostActionCreator());
  };

  let PostChange = () => {
    let PostContent = AddPostFunction.current.value;
    let action = UpdateActionCreator(PostContent);
    props.dispatch(action);
  };

  return (
    <div className={PostsStyle.bgStyle}>
      <h4>{"Мои публикации"}</h4>
      <div>
        <h5>{"Расскажите что-нибудь"}</h5>
      </div>
      <textarea
        onChange={PostChange}
        ref={AddPostFunction}
        value={props.NewPostContent}
      />
      <button onClick={NewPost} className={PostsStyle.button}>
        Add Post
      </button>
      <button className={PostsStyle.button}>Clear</button>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
