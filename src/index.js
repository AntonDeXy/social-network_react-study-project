import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
  {id: 1, message: "Hi, how are you?", likes: 121 },
  {id: 2, message: "Yooooo", likes: 282 },
  {id: 3, message: "It`s my first post", likes: 212 },
]

let dialogsData = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Vlad' },
]

let messagesData = [
  { message: 'Hi' },
  { message: 'How are u?' },
  { message: 'Yoooo' },
]

ReactDOM.render(<App posts={postData} dialogs={dialogsData} messages={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
