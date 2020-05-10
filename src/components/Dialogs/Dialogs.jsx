import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let state = props.dialogPage;
    let newText = React.createRef();

    let dialogElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messageElement = state.messages.map(m => <MessageItem key={m.id} id={m.id} message={m.message}/>)

    let onSendMessage = () => {
        props.sendMessage()
        props.updateText('')
    }

    let onChangeText = () => {
        let text = newText.current.value;
        props.updateText(text)
    }

    return (
        <div className={s.dialogContainer}>
            <div className={s.dialogItems}>
                {dialogElement}
            </div>
            <div className={s.messagesContainer}>
                <div className={s.myMessage}>
                    {messageElement}
                </div>
                <div className={s.messageForm}>
                    <textarea ref={newText} placeholder='Type here...' onChange={onChangeText}
                              value={props.textAreaWords}/>
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;