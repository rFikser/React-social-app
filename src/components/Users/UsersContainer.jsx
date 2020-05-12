import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress, getUser
} from "../../redux/users-reducer";
import s from "./Users.module.css";
import Users from "./Users";
import Preloader from "../common/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUser(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <>
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
                <div className={s.loader}>
                    {this.props.isFetching ? <Preloader/> : null}
                </div>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

export default connect(mapStateToProps, {
    setCurrentPage,
    toggleFollowingProgress,
    getUser,
    follow,
    unfollow
})(UsersContainer);
