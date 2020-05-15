import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import SideNav from "./components/SideNav/SideNav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/Dialogs.container";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <SideNav />
      <div className="app-wrapper-content">
        <Route path="/dialogs/" render={() => <DialogsContainer />} />
        <Route path="/profile/:id?" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/login" render={() => <LoginContainer/>} />
      </div>
    </div>
  );
};

export default App;

