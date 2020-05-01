import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";



let reduces = combineReducers({
    profilePage : profileReducer,
    dialogPage: dialogReducer
})

let store = createStore(reduces);
window.store = store;
export default store;

