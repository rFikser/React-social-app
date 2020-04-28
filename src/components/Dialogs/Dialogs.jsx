import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import YourMessage from "./YourMessage/YourMessage";
import FriendMessage from "./FriendMessage/FriendMessage";
import SubmitArea from './MessageToSendArea/SubmitArea'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog_item}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )

};


const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <YourMessage message={m.message} id={m.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogElements}
            </div>
            <div className={s.messagesArea}>
                <div className={s.messages}>
                    <FriendMessage message="Hello"/>
                    {messagesElements}
                </div>
                <div className={s.submitText}>
                    <SubmitArea sendMessage={props.sendMessage}
                                updateText={props.updateText}
                    />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;