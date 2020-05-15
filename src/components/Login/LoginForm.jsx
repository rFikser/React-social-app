import React from "react";
import {Field} from "redux-form";
import s from "./Login.module.css"
import {ComponentArea} from "../common/FormControls/LoginControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)
const maxLength15 = maxLengthCreator(15)
const LoginArea = ComponentArea("input")
const PasswordArea = ComponentArea("input")

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="" className={s.loginForm}>
            <div>
                <Field name={"email"} placeholder={"email"} component={LoginArea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field name={"password"} placeholder={"password"} component={PasswordArea}
                       validate={[required, maxLength15]}/>
            </div>
            <div>
                <Field name={"rememberMe"} component={"input"} type={"checkbox"}/>Remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

export default LoginForm;