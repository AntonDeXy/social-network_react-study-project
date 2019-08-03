import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { setUserProfile } from './../redux/profileReducer';
import * as axios from 'axios'

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    .then(response => {
      this.props.setUserProfile(response.data)
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)