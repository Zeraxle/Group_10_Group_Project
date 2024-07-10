import React, { useState } from 'react'
import Nav from './Nav'
import { Link, useParams } from 'react-router-dom'

export const QuickOptions = ({loggedInUser}) => {
    const {id} = useParams()
    const [pizzaData, setPizzaData] = useState({})

  return (<>
    <div className='container'>
      {/* <Nav id={id}/> */}
      <h1>Quick Options</h1>
      <div className='d-flex justify-content-evenly'>
        <div>
          <h2>Create Your Own Pizza Here</h2>
          <Link to={'/pizzaform'}><button>New Order</button></Link>
        </div>
        <div>
          <h2>Re-Order Your Favorite Pizza</h2>
          <Link to={'/pizzaform'}><button>Re-Order My Fav</button></Link>
        </div>
      </div>
    </div>
  </>)
}
