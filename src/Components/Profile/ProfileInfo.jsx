import React from 'react'
import Preloader from '../preloader';
import { NavLink } from 'react-router-dom';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../imgs/user.png'
const ProfileInfo = ({ status, profile, ...props }) => {
  if (!profile) {
    return <Preloader />
  }

  let lookForJob = profile.lookingForAJob
  return (
    <div className="ProfileInfo">
      <div className='avatar'>
        { profile.photos.large 
          ? <img src={profile.photos.large} alt="" />
          : <img src={userPhoto} alt=""/>
        }
       
        <ProfileStatusWithHooks status={status} updateStatus={props.updateStatus} />
        <div className='UserInfo'>
          <h3>Name: {profile.fullName}</h3>
          <h3>Про меня: {profile.aboutMe}</h3>
          {lookForJob ? <span>В поиске работы</span> : <span>Работу не ищу</span>}
          <h3>{props.lookingForAJobDescription}</h3>
          <h3>Мои контакты:
          <ul>
              <NavLink><li>{profile.contacts.facebook}</li></NavLink>
            </ul>
          </h3>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo 