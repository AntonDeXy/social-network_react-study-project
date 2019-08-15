import React from 'react'

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  ebableEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  disableEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode
          ? <div className="profileStatus">
            <span onDoubleClick={ this.ebableEditMode }>{this.props.status}</span>
          </div>
          : <div className="profileStatus">
            <input autoFocus onBlur={this.disableEditMode.bind(this)} onDoubleClick={ this.disableEditMode } value={this.props.status} />
          </div>
        }
      </div>
    )
  }
}
export default ProfileStatus 