import React from "react";
import DialogsStyle from "./../Dialogs.module.css";

const Messages = (props) => {
  return <div className={DialogsStyle.message}>{props.message}</div>;
};

export default Messages;
