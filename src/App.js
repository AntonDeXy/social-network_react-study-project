import React from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Profile from './Components/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import {Route, BrowserRouter, Link} from 'react-router-dom'

function App(props) {
  return (    
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <SideBar />      
      <Route path='/dialogs' render={ () => <Dialogs messages={props.messages} dialogs={props.dialogs} /> }/>
      <Route path='/profile' render={ () => <Profile posts={props.posts} /> }/>
    </div>
    </BrowserRouter>
  );
}

export default App;
