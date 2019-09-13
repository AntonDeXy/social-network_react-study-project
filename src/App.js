import React from 'react'
import HeaderContainer from './Components/Header/HeaderContainer'
import SideBarContainer from './Components/SideBarContainer'
import { Route, BrowserRouter, withRouter, Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from "./redux/appReducer"
import Preloader from './Components/preloader'
import { Provider } from 'react-redux'
import { withSuspense } from './hoc/withSuspense';
import store from './redux/redux-store'
// import UsersContainer from './Components/Users/UsersContainer'

const DialogsContainer = React.lazy (() => import ('./Components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy (() => import ('./Components/Users/UsersContainer'))
const ProfileContainer = React.lazy (() => import ('./Components/Profile/ProfileContainer'))
const Login = React.lazy (() => import ('./Components/Login/Login'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <SideBarContainer />
        <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
        <Route path='/users' render={withSuspense(UsersContainer)} />
        <Route path='/login' render={withSuspense(Login)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)

const SamuraiJsApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJsApp