import React from "react";
import s from './YourMessage.module.css'


const YourMessage = (props) => {
    return (
        <div className={s.yourMessage}>
            {props.message}
        </div>
    )
};

export default YourMessage;

