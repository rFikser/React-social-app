import {loginAPI} from "../api/api";

const LOGIN_USER = 'LOGIN_USER';

let initState = {
    email: '',
    password: '',
    rememberMe: false
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_USER :
            return {...state, ...action.data}
        default:
            return state;
    }
}

export const setLogin = (email, password, rememberMe) => {
    return {
        type: LOGIN_USER, data:{email,password,rememberMe}
    }
}

export const loginTC = () => {
    return (dispatch) => {
        loginAPI.logIn().then(response => {
            if (response.data.resultCode === 0) {
                let {email, password, rememberMe} = response.data.data
                dispatch(setLogin(email, password, rememberMe))
            }
        })
    }
}

export default loginReducer;
