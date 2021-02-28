import React from 'react'
import Header, { DispatchHeaderPropsType, MapHeaderPropsType } from './Header'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import { AppStateType } from '../../redux/redux-store'

class HeaderContainer extends React.Component<MapHeaderPropsType & DispatchHeaderPropsType> { 
  render() {
    return (
      <Header isAuth={this.props.isAuth}
      login={this.props.login}
      logout={this.props.logout} />
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})


export default connect<MapHeaderPropsType, DispatchHeaderPropsType, {}, AppStateType>(mapStateToProps, { logout })
(HeaderContainer)