import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export const LoginForm = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const changeHandler = e => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const submitHandler = e => {
    e.preventDefault()
  }

  return (<>
  <form>
    <label>
      Email:
      <input 
        type="text" 
        name="email"
        value={user.email}
        onChange={changeHandler}
      />
    </label>
    <label>
      Password:
      <input 
        type="password" 
        name="password"
        value={user.password}
        onChange={changeHandler}
      />
    </label>
    <input type="submit" value="Login" />
    <Link to={'/'}>Don't have an account?</Link>
  </form>
  </>)
}
