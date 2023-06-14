import React, { ChangeEvent, Component } from "react"
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

type StateType = {
  editMode: boolean
}

class ProfileInfo extends Component<ProfileInfoPropsType, StateType> {
  constructor(props: ProfileInfoPropsType) {
    super(props);
    this.state = {
      editMode: false,
    };
  }

  onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      this.props.savePhoto(e.target.files[0]);
    }
  };

  onSubmit = (formData: ProfileType) => {
    // TODO: remove then
    this.props.saveProfile(formData).then(() => {
      this.setState({ editMode: false });
    });
  };

  render() {
    const { status, profile, isOwner } = this.props;
    const { editMode } = this.state;

    if (!profile) {
      return <Preloader />;
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
            <ProfileStatusWithHooks status={status} updateStatus={this.props.updateStatus} />
            {editMode ? (
              <UserInfoForm initialValues={profile} profile={profile} onSubmit={this.onSubmit} />
            ) : (
              <UserInfo
                goToEditMode={() => {
                  this.setState({ editMode: true });
                }}
                profile={profile}
                isOwner={isOwner}
              />
            )}
          </div>

          {isOwner && <input type="file" onChange={this.onMainPhotoSelected} />}
        </div>
      </div>
    );
  }
}

type ContactPropsType = {
  contactTitle: string
  contactValue: string
}

class Contact extends Component<ContactPropsType> {
  render() {
    const { contactTitle, contactValue } = this.props;
    return (
      <div>
        <b className="contactElement">{contactTitle}</b>: {contactValue}
      </div>
    );
  }
}

type UserInfoPropsType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}
class UserInfo extends Component<UserInfoPropsType> {
  render() {
    const { profile, isOwner, goToEditMode } = this.props;
    return (
      <div className="UserInfo">
        {isOwner && <button onClick={goToEditMode}>Edit</button>}
        <h3>Name: {profile.fullName}</h3>
        <h3>About me: {profile.aboutMe}</h3>
        {profile.lookingForAJob ? (
          <span>Looking for a job</span>
        ) : (
          <span>Not looking for a job</span>
        )}
        <h3>My professional skills:</h3>
        <h4>{profile.lookingForAJobDescription}</h4>
        <h3>
          My contacts:
          {Object.keys(profile.contacts).map((key) => {
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
  }
}

export default ProfileInfo;
