import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateTextAreaProfileActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        textAreaWords: state.profilePage.textAreaWords
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            let action = updateTextAreaProfileActionCreator(text)
            dispatch(action);

        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;