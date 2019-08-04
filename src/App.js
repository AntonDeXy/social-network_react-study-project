import React from 'react'
import HeaderContainer from './Components/Header/HeaderContainer';
import SideBarContainer from './Components/SideBarContainer'
import {Route, BrowserRouter} from 'react-router-dom'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/ProfileContainer';

function App(props) {
  return (    
    <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer />
      <SideBarContainer />      
      <Route path='/dialogs' render={ () => <DialogsContainer />}/>
      <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
      <Route path='/users' render={ () => <UsersContainer />}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
