import React from "react";
import ProfileContentStyles from "./ProfileContent.module.css";

const ProfileContent = (props) => {
  return (
    <div>
      <h3>{"Привет,"}</h3>
      <div>
        <img src="https://c.wallhere.com/photos/7d/be/1920x1080_px_General-533653.png!d"></img>
      </div>
      <div>{"Информация обо мне"}</div>
    </div>
  );
};

export default ProfileContent;
