import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setUserProfile } from './../../redux/profileReducer'
import { profileAPI } from './../../API/Api'


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2;
    }
    profileAPI.getProfile(userId).then(data => {
      this.props.setUserProfile(data)
    })
  }

  render() {
    return(
    <div className='content'>
      <Profile {...this.props} profile={this.props.profile}/>
    </div>
  )
  }
}

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)