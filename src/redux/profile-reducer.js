import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST',
    UPDATE_TEXT_AREA_PROFILE = 'UPDATE-TEXT-AREA-PROFILE',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_STATUS = 'SET_STATUS'

let initState = {
    posts: [
        {message: 'Hello my friend', likesCount: 15, id: 1},
        {message: 'Bad idea', likesCount: 3, id: 2},
        {
            message: 'HTML Generators. Dummy Text Generator. ... Enter your text. Select the values you ' +
                'need from the toolbar. The HTML code is automatically updated in the bottom pane when you ' +
                'make a change. Click Preview to see what it looks like (optional)',
            likesCount: 99, id: 3
        },
    ],
    profile: null,
    status: 'default status'
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                message: action.text,
                likesCount: 15,
                id: 4,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        text
    }
};


export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
};

export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}

export const profileThunkCreater = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id).then((response) => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}


export default profileReducer;