import React, { useState, useEffect } from "react";
import Preloader from "../preloader";
import { NavLink } from "react-router-dom";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../imgs/user.png";
import UserInfoForm from "./UserInfoForm";

const ProfileInfo = ({ status, profile, isOwner, savePhoto, saveProfile, ...props }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  
  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = formData => {
    saveProfile(formData)
    setEditMode(false)
  }
  
  return (
    <div className="ProfileInfo">
      <div className="avatar">
        {profile.photos.large ? (
          <img src={profile.photos.large} alt="" />
        ) : (
          <img src={userPhoto} alt="" />
        )}
        <div>
          <ProfileStatusWithHooks
            status={status}
            updateStatus={props.updateStatus}
          />
          {editMode ? (
            <UserInfoForm initialValues={profile} onSubmit={onSubmit} />
          ) : (
            <UserInfo
              status={status}
              updateStatus={props.updateStatus}
              goToEditMode={() => {
                setEditMode(true);
              }}
              profile={profile}
              isOwner={isOwner}
            />
          )}
        </div>

        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b className="contactElement">{contactTitle}</b>:{contactValue}
    </div>
  );
};

const UserInfo = ({ status, profile, isOwner, updateStatus, goToEditMode }) => {
  return (
    <div className="UserInfo">
      {isOwner && <button onClick={goToEditMode}>Edit</button>}
      <h3>Name: {profile.fullName}</h3>
      <h3>Про меня: {profile.aboutMe}</h3>
      {profile.lookingForAJob ? (
        <span>В поиске работы</span>
      ) : (
        <span>Работу не ищу</span>
      )}
      <h3>My professional skills: </h3> <h4>{profile.lookingForAJobDescription}</h4>
      <h3>
        Мои контакты:
        {Object.keys(profile.contacts).map(key => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </h3>
    </div>
  );
};

export default ProfileInfo;
