import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";


const Friends = (props) => {

    return (
        <div>
            <div className={s.friendsTitle}>
                <h2>Friend List</h2>
            </div>
            <div className={s.friendsList}>
                <Friend/>
                <Friend/>
                <Friend/>
                <Friend/>
                <Friend/>
                <Friend/>
            </div>
        </div>
    )
}


export default Friends;