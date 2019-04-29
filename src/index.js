import * as serviceWorker from './serviceWorker';
import state, { addPost, updateNewPostText, addMessage, updateNewMessageText, subscribe } from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './App';

let rerenderEntrireTree = (state) =>{
  ReactDOM.render(<App
    state={state}
    addPost={addPost}
    updateNewPostText={updateNewPostText}
    addMessage={addMessage}
    updateNewMessageText={updateNewMessageText}
    />, document.getElementById('root'));
}

rerenderEntrireTree(state)


subscribe(rerenderEntrireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
