import React from 'react';
import s from './SideNav.module.css';
import Friends from "./Friends/Friends";
import {NavLink} from "react-router-dom";


const SideNav = (props) => {
    return (
        <div className={s.nav}>
            <nav >
                <div className={s.container_avatar}>
                    <img className={s.avatar}
                         src='https://vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg'
                         alt='avatar'/>
                </div>
                <div className={s.item}>
                    <NavLink exact to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>

            </nav>
            <div className={s.friendsContainer}>
                <Friends images={props.state.friendsImage}/>
            </div>
        </div>
    );
}

export default SideNav;