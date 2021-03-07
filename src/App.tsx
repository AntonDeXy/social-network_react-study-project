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
import { UsersPage } from './Components/Users/UsersContainer'
import { LoginPage } from './Components/Login/Login';

const DialogsContainer = React.lazy (() => import ('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy (() => import ('./Components/Profile/ProfileContainer'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {initializeApp: () => void}
const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)

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
          <Route path='/users' render={() => <UsersPage pageTitle='Пользователи' /> } />
          <Route path='/login' render={() => <LoginPage /> } />
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