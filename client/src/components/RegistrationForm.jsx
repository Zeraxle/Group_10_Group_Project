import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Nav from './Nav'
import { createUser } from '../services/UserServices'

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
      firstName : value => value.length >=2 && value.length <= 25 ? true : "First name must be at least two characters and less that twenty-five characters long.",
      lastName : value => value.length >= 2 && value.length <= 25 ? true : "Last name must be at least two characters and less than twenty-five characters long.",
      email : value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : "Please enter a valid email.",
      address: value => value.length >= 6 && value.length <= 50 ? true : "Address must be at least six characters and less than fifty characters long.",
      city: value => value.length >= 4 && value.length <= 50 ? true : "City must be at least four characters and less than fifty characters long.",
      state: value => value.length >= 4 && value.length <= 50 ? true : "State must be at least four characters and less than fifty characters long.",
      password : value => value.length >= 8 && value.length <= 50 ? true : "Password must be at least eight characters and less than fifty characters long.",
      confirmPassword : (value) => {
        if( name == "confirmPassword" ){ return user.password === value ? true : "Your passwords do not match." }
        if( name == "password" ){ return user.confirmPassword === value ? true : "Your passwords do not match." }}
    }
    if ( name == "password" ){ setErrors( prev => ( {...prev, confirmPassword : validations["confirmPassword"](value)} ) ) }
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
    createUser(user)
      .then(res => {navigate('/home')})
      // .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  
  return (<>
  
  <div className="container">
    <h1 className='text-center text-primary'>Pizza's Pete</h1>
      <div className="card">
        <div className="card-body">
          <h2 className='text-center text-danger'>Register</h2>
          <form onSubmit={submitHandler}>
            <div className="form-group m-3">
              <label className='form-label m-3'>
                First Name:
                <input
                  type="text"
                  name='firstName'
                  value={user.firstName}
                  onChange={changeHandler}
                  className='form-control'
                />
                {errors.firstName && <p>{errors.firstName}</p>}
              </label>
              <label className='form-label'>
                Last Name:
                <input
                  type="text"
                  name='lastName'
                  value={user.lastName}
                  onChange={changeHandler}
                  className='form-control'
                />
                {errors.lastName && <p>{errors.lastName}</p>}
                </label>
            </div>
              
            <div className="form-group">
              <label className='form-label'>
                Email:
                <input
                  type="email"
                  name='email'
                  value={user.email}
                  onChange={changeHandler}
                  className='form-control'
                />
                {errors.email && <p>{errors.email}</p>}
              </label>
            </div>
            <div className="form-group">
              <label className='form-label'>
                Address:
                <input
                  type="text"
                  name='address'
                  value={user.address}
                  onChange={changeHandler}
                  className='form-control'
                />
                {errors.address && <p>{errors.address}</p>}
              </label>
            </div>
            <div className="form-group">
              <label className='form-label m-3'>
                City:
                <input
                  type="text"
                  name='city'
                  value={user.city}
                  onChange={changeHandler}
                  className='form-control'
                />
                {errors.city && <p>{errors.city}</p>}
              </label>
              <label className='form-label'>
                State:
                <input
                  type="text"
                  name='state'
                  value={user.state}
                  onChange={changeHandler}
                  className='form-control'
                />
                {errors.state && <p>{errors.state}</p>}
              </label>
            </div>
            <div className="form-group">
              <label className='form-label m-3'>
                Password:
                <input
                  type="password"
                  name='password'
                  value={user.password}
                  onChange={changeHandler}
                  className='form-control'
                />
                {errors.password && <p>{errors.password}</p>}
              </label>
              <label className='form-label'>
                Confirm Password:
                <input
                  type="password"
                  name='confirmPassword'
                  value={user.confirmPassword}
                  onChange={changeHandler}
                  className='form-control'
                />
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
              </label>
            </div>
            <div className="d-flex justify-content-center">
              <input type="submit" value="Sign up" />
            </div>
            <Link to={"/login"}>Already have an account?</Link>
          </form>
        </div>
      </div>
  </div>
  </>)
}
