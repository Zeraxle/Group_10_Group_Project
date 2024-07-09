import React from 'react'
import Nav from './Nav'

export const PizzaForm = () => {
  return (<>
    <div className="container">
      <Nav/>
      <h1>Craft-A-Pizza</h1>
      <form>
        <div className="form-group">
          <label htmlFor='methods' className='form-label'>Method:</label>
          <select name="methods" id="methods" className='form-select'>
            <option value="carryOut">Carry Out</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='sizes' className='form-label'>Size:</label>
          <select name="sizes" id="sizes" className='form-select'>
            <option value="large">Large</option>
            <option value="medium">Medium</option>
            <option value="small">Small</option>
          </select>
          <label htmlFor='crusts' className='form-label'>Crust:</label>
          <select name="crust" id="crust" className='form-select'>
            <option value="thinCrust">Thin Crust</option>
            <option value="regularCrust">Regular Crust</option>
          </select>
        </div>
      </form>
    </div>
  </>)
}
