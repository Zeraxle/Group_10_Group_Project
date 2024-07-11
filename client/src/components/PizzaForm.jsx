import React, { useState } from 'react'
import Nav from './Nav'
import { createPizza } from '../services/PizzaService'
import {useNavigate} from 'react-router-dom' 

export const PizzaForm = ({loggedInUser}) => {

  const navigate = useNavigate()
  const [pizzaData, setPizzaData] = useState({
    userId: loggedInUser.id,
    method: 'Carry Out',
    size: 'Large',
    crust: 'Thin Crust',
    qty: '1',
    comments: '',
    favorite: false
  })
  const [errors, setErrors] = useState({
    comments: ''
  })
  const changeHandler = e => {
    const {name, value} = e.target
    if(name == "favorite"){
      let checkedValue = e.target.checked
      setPizzaData(prev => ({...prev, [name]: checkedValue}))
    }else{{setPizzaData(prev => ({...prev, [name]: value}))}}
    // validateUserAttribute(name, value)
    }

    const commentsChangeHandler = e => {
      const {name, value} = e.target
      {setPizzaData(prev => ({...prev, [name]: value}))}
      validateUserAttribute(name, value)
      }
  

  const validateUserAttribute = (name, value) => {
    const validations = {
      comments : value => value.length >= 4 && value.length <= 50 ? true : "Must be at least four characters and less that fifty characters long."
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
  console.log(pizzaData)
  const submitHandler = e => {
    e.preventDefault()
    if(!readyToSubmit()){
      alert("Please fill out form correctly. Thank you.")
      return
    }
    createPizza(pizzaData)
      .then(res=>console.log(res))
      .then(navigate('/home'))
      .catch(err=>console.log(err))
  }
  
  return (<>
    <div className="container">
      {/* <Nav loggedInUser={loggedInUser}/> */}
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor='method' className='form-label'>Method:</label>
          <select name="method" id="method" className='form-select' onChange={changeHandler} value={pizzaData.method} required>
            <option value="Carry Out">Carry Out</option>
            <option value="Delivery">Delivery</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='size' className='form-label'>Size:</label>
          <select name="size" id="size" className='form-select' onChange={changeHandler} value={pizzaData.size} required>
            <option value="Large" selected>Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
          <label htmlFor='crust' className='form-label'>Crust:</label>
          <select name="crust" id="crust" className='form-select'  onChange={changeHandler} value={pizzaData.crust} required>
            <option value="Thin Crust">Thin Crust</option>
            <option value="Regular Crust">Regular Crust</option>
          </select>
          <label htmlFor='qty' className='form-label'>
            QTY:
            <input 
              name='qty'
              type="text" 
              onChange={changeHandler}
              value={pizzaData.qty}
              className='form-control'
            />
          </label>
          <div className="form-group d-flex justify-content-evenly">
            <label className='form-label'>
              <p>Make up your own Toppings(NO PINEAPPLE!!!)</p>
              <textarea name="comments" className='form-control' onChange={commentsChangeHandler} value={pizzaData.comments}></textarea>
              {errors.comments && <p>{errors.comments}</p>}
            </label>
            <label>
                Favorite this pizza?
                <input 
                    type="checkbox"
                    name="favorite"
                    onChange={changeHandler}
                    value={pizzaData.favorite} />
            </label>
          </div>
          <input type="submit" value="Add to Order" />
        </div>
      </form>
    </div>
  </>)
}
