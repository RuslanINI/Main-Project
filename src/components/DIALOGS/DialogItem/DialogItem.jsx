import React from "react";
import { NavLink } from "react-router-dom";
import DialogsStyle from "./../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={DialogsStyle.blocks}>
      <div className={DialogsStyle.item}>
        <NavLink
          activeClassName={DialogsStyle.active}
          to={"/Dialogs/" + props.id}
        >
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
