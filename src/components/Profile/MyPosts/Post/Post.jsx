import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div>
            <div className={s.postWrap}>
                <div className={s.message}>
                    {props.message}
                </div>
                <div className={s.likes}>
                    {props.likeCounts}
                    <span className={s.likeIcon}></span>
                </div>
            </div>

        </div>
    )
}

export default Post;