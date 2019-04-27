import React from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Profile from './Components/Profile'

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <SideBar />      
      <Profile />
    </div>
  );
}

export default App;
