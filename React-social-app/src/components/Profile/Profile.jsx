import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateTextAreaProfile} from "../../redux/state";


const Profile = (props) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     updateText={props.updateText}
                     addPost={props.addPost}
            />
        </div>
    );
}

export default Profile;