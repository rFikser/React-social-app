import React from "react";
import Post from './Post/Post';
import s from './MyPosts.module.css';
import MyPostForm from "./MyPostForm";
import {reduxForm} from "redux-form";


const MyPostReduxForm = reduxForm({
    form: 'posts'
})(MyPostForm)

const MyPosts = (props) => {

    let postElements =
        props.posts.map(post => <Post  key={post.id} message={post.message} likeCounts={post.likesCount}/>);

    let onSubmit = (formData) => {
        props.addPost(formData.text);
        formData.text = ''
    }

    return (
        <div className={s.myPosts}>
            <div className={s.submitArea}>
                <MyPostReduxForm onSubmit={onSubmit}/>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;