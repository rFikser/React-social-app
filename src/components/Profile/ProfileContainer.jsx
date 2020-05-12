import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileThunkCreater} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.profileThunkCreater(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    id: state.auth.userId,
});

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {profileThunkCreater})(
    WithUrlProfileContainer
);
