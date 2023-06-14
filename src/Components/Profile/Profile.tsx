import React, { Component } from 'react'
import ProfileInfo from './ProfileInfo'
import MyPostsContainer from '../Post/MyPostsContainer'
import { ProfileType } from '../../types/types'

type ProfilePropsType = {
  status: string
  profile: ProfileType | null
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
  updateStatus: (status: string) => void
}

class Profile extends Component<ProfilePropsType> {
  render() {
    return (
      <div className='content'>
        <ProfileInfo 
          saveProfile={this.props.saveProfile} savePhoto={this.props.savePhoto} 
          isOwner={this.props.isOwner} profile={this.props.profile} 
          status={this.props.status} updateStatus={this.props.updateStatus} />
        <MyPostsContainer />
      </div>
    );
  }
}

export default Profile;
