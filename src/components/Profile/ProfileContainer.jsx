import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId) {
            userId = this.props.id
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        },
            );

    }

    render() {
        return (

            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    id: state.auth.userId
})

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlProfileContainer);