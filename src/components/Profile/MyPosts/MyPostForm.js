import React from "react";
import s from "./MyPosts.module.css";
import {Field} from "redux-form";


const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.submitArea}>
            <div className={s.submitText}>
                    <Field  name='text' className={s.textArea} component='textarea' placeholder='Type here...'/>
            </div>
            <div className={s.submitButton}>
                <button>Send</button>
            </div>
        </form>
    )
}

export default MyPostForm;