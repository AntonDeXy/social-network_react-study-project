import React from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Profile from './Components/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import {Route, BrowserRouter, Link} from 'react-router-dom'
import DialogsContainer from './Components/Dialogs/DialogsContainer';

function App(props) {
  return (    
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <SideBar friends={props.state.profileReducer.friends} />      
      <Route path='/dialogs' render={ () =><DialogsContainer
        store = {props.store}
      />
        }/>
      <Route path='/profile' render={ () => <Profile
        store = {props.store}
        // profilePage={props.state.profileReducer}
        // dispatch={props.dispatch}
         />
        }/>
    </div>
    </BrowserRouter>
  );
}

export default App;
