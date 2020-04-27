import React from "react";
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} likeCounts={post.likesCount}/>)

    return (
        <div className={s.myPosts}>
            {postElements}
        </div>
    );
};

export default MyPosts;