import React from 'react'
import Preloader from './preloader';
import { NavLink } from 'react-router-dom';
import ProfileContactItem from './ProfileContactItem'

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }

  let lookForJob = props.profile.lookingForAJob
  return(
  <div className="ProfileInfo">
    <div>
      <img src="https://html5box.com/html5lightbox/images/skynight.jpg" alt="" />
    </div>
    <div className='avatar'>
      <img src={props.profile.photos.large} alt="" />
      <div className='UserInfo'>
        <h3>Name: {props.profile.fullName}</h3>
        <h3>Про меня: {props.profile.aboutMe}</h3>
        {lookForJob ? <span>В поиске работы</span> : <span>Работу не ищу</span>}
        <h3>{props.lookingForAJobDescription}</h3>
        <h3>Мои контакты:
          <ul>
            <NavLink><li>{props.profile.contacts.facebook}</li></NavLink>
          </ul>
        </h3>
      </div>
    </div>
  </div>
  )
}
export default ProfileInfo 