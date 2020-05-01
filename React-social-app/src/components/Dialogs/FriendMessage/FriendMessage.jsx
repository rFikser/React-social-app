import React from "react";
import s from './FriendMessage.module.css'

const FriendMessage = (props) => {
    return (
        <div className={s.friendMessage}>
            {props.message}
        </div>
    )
};

export default FriendMessage;

