import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";


const Friends = (props) => {

    let imageElements = props.images.map( el => <Friend src={el.image} id={el.id}/>)

    return (
        <div>
            <div className={s.friendsTitle}>
                <h2>Friend List</h2>
            </div>
            <div className={s.friendsList}>
                {imageElements}
            </div>
        </div>
    )
}


export default Friends;