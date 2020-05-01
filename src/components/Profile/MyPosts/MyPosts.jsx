import React from "react";
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = (props) => {
    let textAreaValue = React.createRef();
    let postElements =
        props.posts.map(post => <Post message={post.message} likeCounts={post.likesCount}/>);

    let onAddPost = () => {
        props.addPost();
        props.updateText('');
    };

    let onChange = () => {
        let text = textAreaValue.current.value;
        props.updateText(text);
    };

    return (
        <div className={s.myPosts}>
            <div className={s.submitArea}>
                <div className={s.submitText}>
                    <textarea ref={textAreaValue} onChange={onChange} className={s.textArea}
                              value={props.textAreaWords} placeholder='Type here...'/>
                </div>
                <div className={s.submitButton}>
                    <button onClick={onAddPost}>Send</button>
                </div>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;