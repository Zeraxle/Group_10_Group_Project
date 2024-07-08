import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

export const QuickOptions = () => {
  return (<>
    <div className='container'>
      <Nav/>
      <h1>Quick Options</h1>
      <div className='d-flex justify-content-evenly'>
        <div>
          <Link><button>New Order</button></Link>
        </div>
        <div>
          <Link><button>Re-Order My Fav</button></Link>
        </div>
        <div>
          <Link><button>Surprise Me</button></Link>
        </div>
      </div>
    </div>
  </>)
}