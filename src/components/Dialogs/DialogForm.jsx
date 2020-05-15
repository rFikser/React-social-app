import React from "react";
import {Field} from "redux-form";
import s from './Dialogs.module.css'
const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.messageForm} >
            <Field className={s.messageFormTextArea} name='newMessageBody' component='textarea' placeholder='Type here...'/>
            <button>Send</button>
        </form>
    )
}

export default DialogForm;