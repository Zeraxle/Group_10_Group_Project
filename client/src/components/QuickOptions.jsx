import React from 'react'
import Nav from './Nav'
import { Link, useParams } from 'react-router-dom'

export const QuickOptions = ({loggedInUser}) => {
    const {id} = useParams()

  return (<>
    <div className='container'>
      {/* <Nav id={id}/> */}
      <h1>Quick Options</h1>
      <div className='d-flex justify-content-evenly'>
        <div>
          
          <Link to={'/pizzaform'}><button>New Order</button></Link>
        </div>
        <div>
          <Link to={'/pizzaform'}><button>Re-Order My Fav</button></Link>
        </div>
        <div>
          <Link to={'/pizzaform'}><button>Surprise Me</button></Link>
        </div>
      </div>
    </div>
  </>)
}
