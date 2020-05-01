import React from "react";
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = (props) => {

    let textAreaValue = React.createRef()

    let postElements = props.posts.map(post => <Post message={post.message} likeCounts={post.likesCount}/>)

    let addPost = () => {
        props.addPost()
        textAreaValue.current.value = '';
    }

    let updateText = () => {
        let text = textAreaValue.current.value
        props.updateText(text);
    }

    return (
        <div className={s.myPosts}>
            <div className={s.submitArea}>
                <div className={s.submitText}>
                    <textarea ref={textAreaValue} onChange={updateText} className={s.textArea} value={props.textAreaWords} placeholder='Type here...' />
                </div>
                <div className={s.submitButton}>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;