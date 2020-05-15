import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let initState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                }),
            };

        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter((id) => id !== action.id),
            };
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: FOLLOWING_IN_PROGRESS,
    isFetching,
    userId,
});

export const getUser = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then((response) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));
        });
    };
}

export const follow = (id) => {
    debugger;
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.follow(id).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(id));
            }
            dispatch(toggleFollowingProgress(false, id));
        });
    };
}


export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.unfollow(id).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(id));
            }
            dispatch(toggleFollowingProgress(false, id));
        });
    };
}

export default userReducer;