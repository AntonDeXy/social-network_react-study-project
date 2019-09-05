import React, { useState } from 'react'

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode
        ? <div className="profileStatus">
          <span onDoubleClick={activateEditMode}>{props.status || '---'}</span>
        </div>
        : <div className="profileStatus">
          <input onChange={onStatusChange} onDoubleClick={deactivateEditMode} onBlur={deactivateEditMode} autoFocus value={status} />
        </div>
      }
    </div>
  )
}
export default ProfileStatusWithHooks






// {!this.state.editMode
//   ? <div className="profileStatus">
//     <span onDoubleClick={this.ebableEditMode}>{this.props.status || '---'}</span>
//   </div>
//   : <div className="profileStatus">
//     <input onChange={this.onStatusChange} autoFocus onBlur={this.disableEditMode} value={this.state.status} />
//   </div>
// }