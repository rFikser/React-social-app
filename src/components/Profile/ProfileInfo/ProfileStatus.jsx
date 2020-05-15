import React from "react";

class ProfileStatus extends React.Component {
    state = {
        status: this.props.status,
        editMode: false,
    };

    activateEdit = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEdit = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus();
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {
                    !this.state.editMode &&
                    <div onDoubleClick={this.activateEdit}>
                        {this.props.status || "No status"}
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEdit}
                               value={this.state.status || ''}
                               type="text"/>
                    </div>
                }
            </>
        );
    }
}

export default ProfileStatus;


