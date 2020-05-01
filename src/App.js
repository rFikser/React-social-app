import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import SideNav from './components/SideNav/SideNav';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs.container";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <SideNav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs/' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;

