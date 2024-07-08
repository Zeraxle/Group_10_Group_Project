import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Nav from './Nav'

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

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: ''
  })
  
  const changeHandler = e => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
    validateUserAttribute(name, value)
  }

  const validateUserAttribute = (name, value) => {
    const validations = {
      firstName: value => value.length >=2 && value.length <= 25 ? true : "First name must be at least two characters and less that twenty-five characters long.",
      lastName: value => value.length >=2 && value.length <= 25 ? true : "Last name must be at least two characters and less than twenty-five characters long.",
      email : value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : "Please enter a valid email.",
      address: value => value.length >= 6 && value.length <= 50 ? true : "Address must be at least six characters and less than fifty characters long.",
      city: value => value.length >= 6 && value.length <= 50 ? true : "City must be at least six characters and less than fifty characters long.",
      state: value => value.length >= 4 && value.length <= 50 ? true : "State must be at least four characters and less than fifty characters long.",
      password : value => value.length >= 8 && value.length <= 50 ? true : "Password must be at least eight characters and less than fifty characters long.",
      confirmPassword : (value) => {
        if( name == "confirmPassword" ){ return person.password === value ? true : "Your passwords do not match." }
        if( name == "password" ){ return person.confirmPassword === value ? true : "Your passwords do not match." }}
    }
    if ( name == "password" ){ setErrors( prev => ( {...prev, confirm_password : validations["confirm_password"](value)} ) ) }
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
      navigate('/')
    }else{
      
    }

  }
  
  return (<>
  <header>
    <h1>Pizza's Pete</h1>
    <Nav />
  </header>

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
