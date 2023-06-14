import React, { Component } from 'react'

type ProfileContactItemPropsType = {
  item: string
}

class ProfileContactItem extends Component<ProfileContactItemPropsType> {
  render() {
    const { item } = this.props;
    return <li>{item}</li>;
  }
}

export default ProfileContactItem