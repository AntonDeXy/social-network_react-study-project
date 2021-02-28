import React from 'react'
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

const Profile:React.FC<ProfilePropsType> = ({
  status, profile,
  isOwner, savePhoto,
  saveProfile, updateStatus
}) => {
  return(
    <div className='content'>
      <ProfileInfo 
        saveProfile={saveProfile} savePhoto={savePhoto} 
        isOwner={isOwner} profile={profile} 
        status={status} updateStatus={updateStatus} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile