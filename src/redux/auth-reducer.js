import {headerAPI} from "../api/api";

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


export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email,login}});

export const headerThunkCreator = () => {
    return (dispatch) => {
        headerAPI.getAuth().then((response) => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setUserData(id, email, login));
            }
        });
    }
}

export default authReducer;