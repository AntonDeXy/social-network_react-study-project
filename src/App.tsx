import React, { Component, ComponentType } from 'react'
import HeaderContainer from './Components/Header/HeaderContainer'
import SideBarContainer from './Components/SideBarContainer'
import { Route, withRouter, BrowserRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from "./redux/appReducer"
import Preloader from './Components/preloader'
import { Provider } from 'react-redux'
import { withSuspense } from './hoc/withSuspense'
import store, { AppStateType } from './redux/redux-store'

const DialogsContainer = React.lazy (() => import ('./Components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy (() => import ('./Components/Users/UsersContainer'))
const ProfileContainer = React.lazy (() => import ('./Components/Profile/ProfileContainer'))
const Login = React.lazy (() => import ('./Components/Login/Login'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {initializeApp: () => void}

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedUsers = withSuspense(UsersContainer)
const SuspendedLogin = withSuspense(Login)

class App extends Component<MapPropsType & DispatchPropsType> {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      <Preloader />
    }
    
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <SideBarContainer />
        <Switch>
          <Route exact path='/dialogs' render={() => <SuspendedDialogs />} />
          <Route path='/profile/:userId?' render={() => <SuspendedProfile />} />
          <Route path='/users' render={() => <SuspendedUsers /> } />
          <Route path='/login' render={() => <SuspendedLogin /> } />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

const AppContainer = compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)

const SamuraiJsApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJsApp