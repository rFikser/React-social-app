import React from 'react';
import s from './ProfileInfo.module.css';
import defaultAvatar from '../../../assets/Images/default-avatarpng.png'
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    return (
        <div className={s.profileWrapper}>
            <span className={s.avatar}>
                <img alt="avatar"
                     src={props.profile.photos.large !== null ? props.profile.photos.large : defaultAvatar}/>
            </span>
            <div className={s.aboutMe}><ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
            <div className={s.profileDiscription}>
                <div className={s.fullName}>Name: <b>{props.profile.fullName}</b></div>
                <div className={s.socialContacts}>
                    <span>Contacts: </span>
                    <a href={props.profile.contacts.vk}><i className="fab fa-vk"/></a>
                    <a href='#'><i className="fab fa-facebook-f"/></a>
                    <a href='#'><i className="fab fa-twitter"/></a>
                    <a href='#'><i className="fab fa-instagram-square"/></a>
                    <a href='#'><i className="fab fa-github"/></a>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;