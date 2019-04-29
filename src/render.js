import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './redux/state'
import {updateNewPostText} from './redux/state'
import {addMessage} from './redux/state'
import {updateNewMessageText} from './redux/state'
// addPost('any Text')

export let rerenderEntrireTree = (state) =>{
  ReactDOM.render(<App
    state={state}
    addPost={addPost}
    updateNewPostText={updateNewPostText}
    addMessage={addMessage}
    updateNewMessageText={updateNewMessageText}
    />, document.getElementById('root'));
}
