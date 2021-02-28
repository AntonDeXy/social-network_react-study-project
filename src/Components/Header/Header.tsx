import React from 'react'
import { NavLink } from 'react-router-dom';

export type MapHeaderPropsType = {
  isAuth: boolean
  login: string | null
}

export type DispatchHeaderPropsType = {
  logout: () => void
}

const Header:React.FC<MapHeaderPropsType & DispatchHeaderPropsType> = ({isAuth, login, logout}) =>(
  <header>
    <img src="https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/08104208/Adidas-Logo-PNG-Images.png" alt="" />
    <div className="loginBlock">
      {isAuth 
      ? <div>{login} - <button onClick={logout}>Logout</button></div>
      : <NavLink to={'/login'}>Login</NavLink>
      }
    </div>
  </header>
)

export default Header