import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getStatus, profileThunkCreater, updateStatus} from "../../redux/profile-reducer";
import {withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.id;
    if (!userId) {
      // userId = this.props.id;
      userId = 7919
    }
    this.props.profileThunkCreater(userId);
    this.props.getStatus(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}  status={this.props.status} updateStatus={this.props.updateStatus}/>;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  id: state.auth.userId,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { profileThunkCreater, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

