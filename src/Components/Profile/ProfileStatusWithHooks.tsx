import React, { ChangeEvent, Component } from 'react'

type ProfileStatusWithHooksPropsType = {
  status: string
  updateStatus: (status: string) => void
}

type StateType = {
  status: string,
  editMode: boolean,
}

class ProfileStatusWithHooks extends Component<ProfileStatusWithHooksPropsType, StateType> {
  constructor(props: ProfileStatusWithHooksPropsType) {
    super(props);
    this.state = {
      editMode: false,
      status: props.status
    };
  }

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    const { status, editMode } = this.state;

    return (
      <div>
        {!editMode ? (
          <div className="profileStatus">
            <span onDoubleClick={this.activateEditMode}>
              {status || '---'}
            </span>
          </div>
        ) : (
          <div className="profileStatus">
            <input
              onChange={this.onStatusChange}
              onDoubleClick={this.deactivateEditMode}
              onBlur={this.deactivateEditMode}
              autoFocus
              value={status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatusWithHooks