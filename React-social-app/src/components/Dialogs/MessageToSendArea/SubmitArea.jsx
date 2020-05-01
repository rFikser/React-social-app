import React from "react";
import s from './SubmitArea.module.css'


const SubmitArea = (props) => {

    let newMessageText = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
        newMessageText.current.value = '';
    }

    let textChange = () => {
        let text = newMessageText.current.value;
        props.updateText(text);
    }


    return (
        <div className={s.submitArea}>
            <div className={s.submitText}>
                <textarea className={s.textArea} ref={newMessageText} onChange={textChange} placeholder='Type here...' value={props.textAreaWords}/>
            </div>
            <div className={s.submitButton}>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default SubmitArea;