import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useParams } from 'react-router-dom'
import { findUsersFavPizza } from '../services/UserServices'

export const QuickOptions = ({loggedInUser}) => {
    const {id} = useParams()
    const [pizzaData, setPizzaData] = useState({})
    useEffect(()=> {
      findUsersFavPizza(loggedInUser.id)
      .then(res => setPizzaData(res))
      .catch(err=> console.log(err))
    }, [])

  return (<>
    <div className='container'>
      {/* <Nav id={id}/> */}
      <h1>Quick Options</h1>
      <div className='d-flex justify-content-evenly'>
        <div>
          <h2>Create Your Own Pizza Here</h2>
          <p>METHOD: Carry Out</p>
          <p>QTY: 1</p>
          <p>Crust: Thin Crust</p>
          <p>Toppings: Pepperoni</p>
          <Link to={'/pizzaform'}><button>New Order</button></Link>
        </div>
        <div>
          <h2>Re-Order Your Favorite Pizza</h2>
          <p>METHOD: {pizzaData.method}</p>
          <p>QTY: {pizzaData.qty}</p>
          <p>Crust: {pizzaData.crust}</p>
          <p>Toppings: {pizzaData.comments}</p>
          <Link to={`/favpizzaform`}><button>Re-Order My Fav</button></Link>
        </div>
      </div>
    </div>
  </>)
}
