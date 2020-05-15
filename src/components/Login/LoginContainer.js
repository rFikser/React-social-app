import React from "react";
import LoginForm from "./LoginForm"
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginTC} from "../../redux/login-reducer";


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

class LoginContainer extends React.Component {

    onSubmit = (formData) => {
        console.log(formData)
        this.props.loginTC(formData)
        formData.email = ''
    }

    render() {
        return (
            <LoginReduxForm onSubmit={this.onSubmit}/>
        )
    }
}

const mapStateToProps = (state) => ({
    logIn: state.loginPage
})


export default connect(mapStateToProps, {loginTC})(LoginContainer)