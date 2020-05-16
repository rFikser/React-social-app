import React from "react";
import Header from "./Header";

import {connect} from "react-redux";
import {headerThunkCreator, logoutTC} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.headerThunkCreator()
    }


    onSubmit = (e) => {
        e.preventDefault()
        this.props.logoutTC();
    }

    render() {

        return <Header {...this.props} onSubmit={this.onSubmit}/>;
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
});

export default connect(mapStateToProps, {headerThunkCreator, logoutTC})(HeaderContainer);
