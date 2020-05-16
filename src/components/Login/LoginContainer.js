import React from "react";
import LoginForm from "./LoginForm"
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginTC, logoutTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";



const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

class LoginContainer extends React.Component {

    onSubmit = ({email, password, rememberMe}) => {
        console.log(email, password, rememberMe)
        this.props.loginTC(email, password, rememberMe)
    }


    render() {

        if(this.props.isAuth) {
            return <Redirect to={"/profile"}/>
        }

        return (
            <LoginReduxForm onSubmit={this.onSubmit}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC, logoutTC})(LoginContainer)