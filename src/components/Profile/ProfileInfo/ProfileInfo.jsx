import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profile_logo}>
                <div className={s.backLogo}></div>
            </div>
            <div className={s.profileDiscription}>
                <div className="profileName">Name: <b>MyName</b></div>
                <div className="profileCity">City: <b>MyCity</b></div>
            </div>

        </div>
    );
}

export default ProfileInfo;