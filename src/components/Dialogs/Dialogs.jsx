import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import DialogForm from "./DialogForm";
import { reduxForm } from "redux-form";

const DialogReduxForm = reduxForm({
  form: "newMessage",
})(DialogForm);

const Dialogs = (props) => {
  let state = props.dialogPage;

  let dialogElement = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messageElement = state.messages.map((m) => (
    <MessageItem key={m.id} id={m.id} message={m.message} />
  ));

  let onSubmit = (value) => {
    props.sendMessage(value.newMessageBody);
    value.newMessageBody = "";
  };

  return (
    <div className={s.dialogContainer}>
      <div className={s.dialogItems}>{dialogElement}</div>
      <div className={s.messagesContainer}>
        <div className={s.myMessage}>{messageElement}</div>
        <div className={s.messageForm}>
          <DialogReduxForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
