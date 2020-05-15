import React from "react";
import s from "./Users.module.css";
import defaultAvatar from "../../assets/Images/default-avatarpng.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / 300);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.container}>
      <div className={s.pageNumbers}>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={`${s.pageItem} ${
                props.currentPage === p && s.selectedPage
              }`}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div className={s.friendBlock} key={user.id}>
          <div className={s.avatar}>
            <NavLink to={"/profile/" + user.id}>
              <img
                src={
                  user.photos.small !== null ? user.photos.small : defaultAvatar
                }
                alt="avatar"
              />
            </NavLink>
          </div>
          <div className={s.nameandcity}>
            <div className={s.name}>{user.name}</div>
            <div className={s.city}>
              City
              <br />
              Country
            </div>
          </div>
          <div className={s.followBtn}>
            {user.followed ? (
              <button
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                className={s.followedUser}
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;