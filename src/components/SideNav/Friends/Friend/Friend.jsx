import React from 'react';
import s from './Friend.module.css';


const Friend = (props) => {

    return (
        <div>
            <div className={s.friendItem}>
                <div className={s.friendImage}>
                    <img className={s.friendItemImage} src={props.src} alt={props.id}/>
                    <div className={s.friendProps}>
                        <div className={s.friendName}>John</div>
                        <div className={s.friendTips}>Jerk</div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Friend;