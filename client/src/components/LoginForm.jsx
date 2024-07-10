import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { logUserIn } from '../services/UserServices'

export const LoginForm = ({setLoggedInUser, loggedInUser}) => {

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
    logUserIn(user)
      .then(res =>{ 
        setLoggedInUser(res)
        navigate(`/home`)
      })
      // .then(res => console.log(res))
      // .then(res => {navigate(`/home/${res.id}`)})
      .catch(err => console.log(err))
  }

  return (<>
  <div className="container">
  <h1 className='text-center text-primary'>Pizza's Pete</h1>
    <div className="card">
      <div className="card-body">
        <h2 className='text-center text-danger'>Login</h2>
        <form onSubmit={submitHandler}>
          {errors.email && <p>{errors.email}</p>}
          {errors.password && <p>{errors.password}</p>}
          <div className="form-group">
            <label className='form-label'>
              Email:
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={changeHandler}
                className='form-control'
              />
            </label>
          </div>
          <div className="form-group">
            <label className='form-label'>
              Password:
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={changeHandler}
                className='form-control'
              />
            </label>
          </div>
          <div className="d-flex justify-content-center">
            <input type="submit" value="Login" />
          </div>
          <Link to={'/'}>Don't have an account?</Link>
        </form>
      </div>
    </div>
  </div>
  </>)
}
