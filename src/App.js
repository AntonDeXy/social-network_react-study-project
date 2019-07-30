import React from 'react'
import Header from './Components/Header'
import SideBarContainer from './Components/SideBarContainer'
import Profile from './Components/Profile'
import {Route, BrowserRouter} from 'react-router-dom'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import UsersContainer from './Components/Users/UsersContainer';

function App(props) {
  return (    
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <SideBarContainer />      
      <Route path='/dialogs' render={ () => <DialogsContainer />}/>
      <Route path='/profile' render={ () => <Profile />}/>
      <Route path='/users' render={ () => <UsersContainer />}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
