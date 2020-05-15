import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import loginReducer from "./login-reducer";

let reduces = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    loginPage: loginReducer
})

let store = createStore(reduces, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;

