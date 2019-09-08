import React from 'react'
import HeaderContainer from './Components/Header/HeaderContainer'
import SideBarContainer from './Components/SideBarContainer'
import { Route, BrowserRouter, withRouter, Router } from 'react-router-dom'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import UsersContainer from './Components/Users/UsersContainer'
import ProfileContainer from './Components/Profile/ProfileContainer'
import Login from './Components/Login/Login'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from "./redux/appReducer"
import Preloader from './Components/preloader'
import { Provider } from 'react-redux';
import store from './redux/redux-store';

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
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/login' render={() => <Login />} />
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