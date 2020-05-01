import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div>
            <div className={s.postWrap}>
                <div className={s.message}>
                    {props.message}
                </div>

            </div>
            <div className={s.likes}>
                <button className={s.likeIcon}>Like</button>
                <div>{props.likeCounts}</div>
            </div>
        </div>
    )
}

export default Post;