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
      <SideBar friends={props.state.profilePage.friends} />      
      <Route path='/dialogs' render={ () =><Dialogs
        messageValue={props.state.messagesPage.newMessageText}
        updateMessageText={props.updateNewMessageText}
        newMessageText={props.addMessage}
        messages={props.state.messagesPage.messages}
        dialogs={props.state.messagesPage.dialogs} /> }/>
      <Route path='/profile' render={ () => <Profile
        posts={props.state.profilePage}
        dispatch={props.dispatch}
        // newPostText={props.state.profilePage.newPostText}
        // addPost={props.addPost}
         />
        }/>
    </div>
    </BrowserRouter>
  );
}

export default App;
