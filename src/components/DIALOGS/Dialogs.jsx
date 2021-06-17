import React from "react";
import DialogsStyle from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";
import { NewMessageCreator, UpdateMessageBodyCreator } from "../../Redux/State";

<DialogItem />;
<Messages />;

const Dialogs = (props) => {
  let state = props.store.State.DialogsData;

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = state.messagesData.map((messageContent) => (
    <Messages message={messageContent.message} id={messageContent.id} />
  ));
  let NewMessageText = state.NewMessageText;

  let MessageOnClick = () => {
    props.store.dispatch(NewMessageCreator());
  };
  let MessageOnChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(UpdateMessageBodyCreator(body));
  };

  return (
    <div className={DialogsStyle.body}>
      <div className={DialogsStyle.itemDialogs}>{dialogsElements}</div>
      <div
        className={`${DialogsStyle.messageItems} ${DialogsStyle.messageBackGround}`}
      >
        <div>{messageElements}</div>
        <input
          className={DialogsStyle.input}
          // placeholder="say something"
          value={NewMessageText}
          onChange={MessageOnChange}
        ></input>
        <button className={DialogsStyle.button} onClick={MessageOnClick}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
