import React from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Profile from './Components/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import {Route, BrowserRouter, Link} from 'react-router-dom'

function App(props) {
  debugger
  return (    
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <SideBar friends={props.state.profilePage.friends} />      
      <Route path='/dialogs' render={ () =><Dialogs
        messages={props.state.messagesPage.messages}
        dialogs={props.state.messagesPage.dialogs} /> }/>
      <Route path='/profile' render={ () => <Profile
        posts={props.state.profilePage.posts} /> }/>
    </div>
    </BrowserRouter>
  );
}

export default App;
