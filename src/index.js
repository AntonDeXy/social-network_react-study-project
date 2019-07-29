import * as serviceWorker from './serviceWorker'
import store from './redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

let rerenderEntrireTree = (state) =>{
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>,document.getElementById('root'));
}

rerenderEntrireTree(store.getState())

store.subscribe( () => {
  let state = store.getState() 
  rerenderEntrireTree(state)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
