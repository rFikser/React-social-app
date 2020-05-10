import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let reduces = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer
})

let store = createStore(reduces);
window.store = store;
export default store;

