import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileContent from "./MyPosts/ProfileContent/ProfileContent";

const Profile = (props) => {
  return (
    <div>
      <ProfileContent />
      <MyPosts
        PostsData={props.ProfileData.PostsData}
        NewPostContent={props.ProfileData.NewPostContent}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
