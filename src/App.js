import React from 'react'
import Header from './Components/Header'
import SideBarContainer from './Components/SideBarContainer'
import Profile from './Components/Profile'
import {Route, BrowserRouter} from 'react-router-dom'
import DialogsContainer from './Components/Dialogs/DialogsContainer';

function App(props) {
  return (    
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <SideBarContainer />      
      <Route path='/dialogs' render={ () => <DialogsContainer/>}/>
      <Route path='/profile' render={ () => <Profile/>}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
