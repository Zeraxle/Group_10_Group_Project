import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export const LoginForm = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const changeHandler = e => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
    validateUserAttribute(name, value)
  }

  const validateUserAttribute = (name, value) => {
    const validations = {
      email : value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : "Incorrect email/password.",
      password : value => value.length >= 8 && value.length <= 50 ? true : "Incorrect email/password."
    }
    setErrors( prev => ( {...prev, [name] : validations[name](value)} ) )
  }

  const readyToSubmit = () => {
    for ( let key in errors ){
        if( errors[key] !== true ){
            return false
        }
    }
    return true
}

  const submitHandler = e => {
    e.preventDefault()
    if(!readyToSubmit()){
      alert("Please fill out form correctly. Thank you.")
      return
    }
  }

  return (<>
  <form onSubmit={submitHandler}>
    {errors.email && <p>{errors.email}</p>}
    {errors.password && <p>{errors.password}</p>}
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
