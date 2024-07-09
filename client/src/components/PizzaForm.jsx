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
          <label htmlFor='quantities' className='form-label'>QTY:</label>
          <select name="quantities" id="quantities" className='form-select'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </form>
    </div>
  </>)
}
