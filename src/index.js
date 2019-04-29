import * as serviceWorker from './serviceWorker';
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './App';

let rerenderEntrireTree = (state) =>{
  ReactDOM.render(<App
    state={store.getState()}
    addPost={store.addPost.bind(store)}
    updateNewPostText={store.updateNewPostText.bind(store)}
    addMessage={store.addMessage.bind(store)}
    updateNewMessageText={store.updateNewMessageText.bind(store)}
    />, document.getElementById('root'));
}

rerenderEntrireTree(store.getState())

store.subscribe(rerenderEntrireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
