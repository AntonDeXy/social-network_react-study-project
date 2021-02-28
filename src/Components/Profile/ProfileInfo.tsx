import React, { ChangeEvent, useState } from "react"
import Preloader from "../preloader"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import userPhoto from "../../imgs/user.png"
import UserInfoForm from "./UserInfoForm"
import { ContactsType, ProfileType } from "../../types/types"

type ProfileInfoPropsType = {
  status: string
  profile: ProfileType | null
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
  updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
  status, profile, isOwner,
  savePhoto, saveProfile, updateStatus
}) => {
  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData: ProfileType) => {
    // TODO: remove then
    saveProfile(formData).then(
      () => setEditMode(false)
    )
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
            updateStatus={updateStatus}
          />
          {editMode ? (
            <UserInfoForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          ) : (
              <UserInfo
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

type ContactPropsType = {
  contactTitle: string
  contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b className="contactElement">{contactTitle}</b>:{contactValue}
    </div>
  );
};

type UserInfoPropsType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}

const UserInfo:React.FC<UserInfoPropsType> = ({ profile, isOwner, goToEditMode }) => {
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
            contactValue={profile.contacts[key as keyof ContactsType]}
          />
        );
      })}
      </h3>
    </div>
  );
};

export default ProfileInfo;
