import React from "react";
import Header from "./Header";

import { connect } from "react-redux";
import {headerThunkCreator} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.headerThunkCreator()
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
});

export default connect(mapStateToProps, { headerThunkCreator })(HeaderContainer);
