import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = (props) =>(
  <header>
    <img src="https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/08104208/Adidas-Logo-PNG-Images.png" alt="" />
    <div className="loginBlock">
      {props.isAuth 
      ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
      : <NavLink to={'/login'}>Login</NavLink>
      }
    </div>
  </header>
)

export default Header