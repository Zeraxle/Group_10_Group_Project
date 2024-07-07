import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export const RegistrationForm = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})

  const changeHandler = e => {
    setUser({...user, [e.target.name]: e.target.value})
  }
  const submitHandler = e => {
    e.preventDefault()
    
  }
  
  return (<>
    <form>
      <label>
        First Name:
        <input 
          type="text"
          name='firstName'
          value={user.firstName}
          onChange={changeHandler}
        />
      </label>
      <label>
        Last Name:
        <input 
          type="text"
          name='lastName'
          value={user.lastName}
          onChange={changeHandler}
        />
      </label>
      <label>
        Email:
        <input 
          type="email"
          name='email'
          value={user.email}
          onChange={changeHandler}
        />
      </label>
      <label>
        Address:
        <input 
          type="text"
          name='address'
          value={user.address}
          onChange={changeHandler}
        />
      </label>
      <label>
        City:
        <input 
          type="text"
          name='city'
          value={user.city}
          onChange={changeHandler}
        />
      </label>
      <label>
        State:
        <input 
          type="text"
          name='state'
          value={user.state}
          onChange={changeHandler}
        />
      </label>
      <label>
        Password:
        <input 
          type="password"
          name='confirmPassword'
          value={user.confirmPassword}
          onChange={changeHandler}
        />
      </label>
      <input type="submit" value="Register" />
    </form>
    <Link to={"/login"}>Already have an account?</Link>
  </>)
}
