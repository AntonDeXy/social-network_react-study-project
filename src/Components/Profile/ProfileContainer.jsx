import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { getUserProfile, updateStatus, getStatus, savePhoto } from './../../redux/profileReducer'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return(
    <div className='content'>
      {!this.props.authorizedUserId
      ? <Redirect to ="/login"/> : 
       <Profile {...this.props}
       isOwner={!this.props.match.params.userId}
       profile={this.props.profile}
       status={this.props.status}
       updateStatus={this.props.updateStatus}
       savePhoto={this.props.savePhoto}/>
      }
    </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)
