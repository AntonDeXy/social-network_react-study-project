import React from 'react'

type ProfileContactItemPropsType = {
  item: string
}

const ProfileContactItem: React.FC<ProfileContactItemPropsType> = ({item}) => (
  <li>{item}</li>
)

export default ProfileContactItem