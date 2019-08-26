import React from 'react'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
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
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode
          ? <div className="profileStatus">
            <span onDoubleClick={ this.ebableEditMode }>{this.props.status || '---'}</span>
          </div>
          : <div className="profileStatus">
            <input onChange={this.onStatusChange} autoFocus onBlur={this.disableEditMode} value={this.state.status} />
          </div>
        }
      </div>
    )
  }
}
export default ProfileStatus 