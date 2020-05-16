import {headerAPI, loginAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}


export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});

export const headerThunkCreator = () => {
    return (dispatch) => {
        headerAPI.getAuth().then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login, true));
            }
        });
    }
}

export const loginTC = (email, password, rememberMe) => {
    return (dispatch) => {
        loginAPI.logIn(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(headerThunkCreator())
            }
        })
    }

}

export const logoutTC = () => {
    return (dispatch) => {
        loginAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null , false))
            }
        })
    }
}


export default authReducer;