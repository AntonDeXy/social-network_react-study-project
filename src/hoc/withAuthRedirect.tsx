import React, { ComponentType } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppStateType } from '../redux/redux-store'

const mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
})

type MapPropsType = {
  isAuth: boolean
}

type DispatchPropsType = {
}

export function withAuthRedirect<WCP> (WrappedComponent: ComponentType<WCP>) {
  const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    const {isAuth, ...restProps} = props

    if(!isAuth) return <Redirect to={'/login'}/>
    
    return <WrappedComponent {...restProps as unknown as WCP}/>
  }

  const ConnectedAuthRedirectComponent = connect<MapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent
}