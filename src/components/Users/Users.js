import React from "react";
import s from './Users.module.css'
import defaultAvatar from '../../assets/Images/default-avatarpng.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / 500)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div className={s.container}>
            <div className={s.pageNumbers}>
                {pages.map(p => {
                    return <span
                        key={p}
                        className={`${s.pageItem} ${props.currentPage === p && s.selectedPage}`}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                    >{p}</span>
                })}
            </div>
            {
                props.users.map(user =>
                    <div className={s.friendBlock} key={user.id}>
                        <div className={s.avatar}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : defaultAvatar} alt='avatar'/>
                            </NavLink>
                        </div>
                        <div className={s.nameandcity}>
                            <div className={s.name}>{user.name}</div>
                            <div className={s.city}>
                                City<br/>
                                Country
                            </div>
                        </div>
                        <div className={s.followBtn}>
                            {user.followed
                                ? <button className={s.followedUser} onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "7fd2002f-d278-4500-8dca-ac31cc02438c"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(user.id)
                                        }else {
                                            console.log(response.data.resultCode)
                                        }
                                    });
                                }}>unfollow</button> :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "7fd2002f-d278-4500-8dca-ac31cc02438c"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id)
                                        } else {
                                            console.log(response.data.resultCode)
                                        }
                                    });

                                }}>follow</button>}

                        </div>
                    </div>
                )
            }

        </div>
    )

}

export default Users;