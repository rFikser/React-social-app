import React from 'react';
import s from './Friend.module.css'


const Friend = (props) => {

    return (
        <div>
            <div className={s.friendImage}>
                <img src="https://html5css.ru/w3images/avatar2.png" alt=""/>
            </div>
            <div className={s.friendName}>
                John
            </div>
        </div>
    )
}


export default Friend;