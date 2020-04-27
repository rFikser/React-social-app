import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import SideNav from './components/SideNav/SideNav';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Route} from "react-router-dom";




function App(props) {



    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <SideNav state={props.state.sideBar}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs/' render={() => <Dialogs state={props.state.dialogPage}/>}/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

