import React, { useState } from 'react'
import Nav from './Nav'

export const PizzaForm = () => {
  const [pizzaData, setPizzaData] = useState({
    method: '',
    size: '',
    crust: '',

  })
  
  
  return (<>
    <div className="container">
      <Nav/>
      <h1>Craft-A-Pizza</h1>
      <form>
        <div className="form-group">
          <label htmlFor='method' className='form-label'>Method:</label>
          <select name="method" id="method" className='form-select'>
            <option value="carryOut">Carry Out</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='size' className='form-label'>Size:</label>
          <select name="size" id="size" className='form-select'>
            <option value="large">Large</option>
            <option value="medium">Medium</option>
            <option value="small">Small</option>
          </select>
          <label htmlFor='crust' className='form-label'>Crust:</label>
          <select name="crust" id="crust" className='form-select'>
            <option value="thinCrust">Thin Crust</option>
            <option value="regularCrust">Regular Crust</option>
          </select>
          <label htmlFor='quantity' className='form-label'>QTY:</label>
          <select name="quantity" id="quantity" className='form-select'>
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
          <section className="toppings">
              <p>Choose Your Toppings</p>
              <label>
                Pepperoni
                <input 
                    type="checkbox" 
                    name="pepperoni"
                
                />
              </label>
              <label>
                Sausage
                <input 
                    type="checkbox" 
                    name="sausage"
                
                />
              </label>
              <label>
                Ham
                <input 
                    type="checkbox"   
                    name="ham"
                
                />
              </label>
              <label>
                Four Cheese
                <input 
                    type="checkbox" 
                    name="four_cheese"
                
                />
              </label>
              <label>
                Green Peppers
                <input 
                    type="checkbox" 
                    name="green_peppers"
                
                />
              </label>
              <label>
                Grilled Chicken
                <input 
                    type="checkbox" 
                    name="grilled_chicken"
                
                />
              </label>
              <label>
                Mushrooms
                <input 
                    type="checkbox" 
                    name="mushrooms"
                
                />
              </label>
              <label>
                Onions
                <input 
                    type="checkbox" 
                    name="onions"
                
                />
              </label>
              <p>THERE WILL NEVER BE PINEAPPLE!!!</p>
          </section>
          <input type="submit" value="Add to Order" />
        </div>
      </form>
    </div>
  </>)
}
