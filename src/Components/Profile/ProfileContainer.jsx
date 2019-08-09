import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { getUserProfile} from './../../redux/profileReducer'


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2;
    }


    this.props.getUserProfile(userId)
  }

  render() {
    if(!this.props.isAuth) return <Redirect to={'/login'}/>

    return(
    <div className='content'>
      <Profile {...this.props} profile={this.props.profile}/>
    </div>
  )
  }
}

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)