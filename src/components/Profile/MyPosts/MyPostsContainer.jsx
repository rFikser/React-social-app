import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
      posts: state.profilePage.posts,
      textAreaWords: state.profilePage.textAreaWords,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;