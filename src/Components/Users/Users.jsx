import React from 'react'

const Users = (props) => {
  debugger

  if(props.users.length === 0){
    props.setUsers([
      { id: 1, photoUrl: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/b/b/bbc42ecec20ed2c885ab70204c37d2e7.jpg',followed: false, FullName: 'Dmitry', status: 'I`m a boss', location: {city: 'Minsk', country: 'Belarus'} },
      { id: 2, photoUrl: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/b/b/bbc42ecec20ed2c885ab70204c37d2e7.jpg', followed: true, FullName: 'Sasha', status: 'I`m a boss too', location: {city: 'Moscow', country: 'Russian'} },
      { id: 3, photoUrl:'https://i.citrus.ua/imgcache/size_800/uploads/shop/b/b/bbc42ecec20ed2c885ab70204c37d2e7.jpg', followed: false, FullName: 'Andrew', status: 'I`m a boss too', location: {city: 'Kyiv', country: 'Ukraine'} },
    ])
  }
  return(
    <div className='content'>
      {props.users.map (u => 
        <div key={u.id}  >
          <span>
            <div>
              <img src={u.photoUrl} className='UsersPhoto' alt='ava'
              />
            </div>
            <div>
              { u.followed 
                ? <button onClick={ () => {props.unfollow(u.id)}} >Unfollow</button>
                : <button onClick={ () => {props.follow(u.id)}}>follow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>  
      )}
    </div>
  )
}

export default Users