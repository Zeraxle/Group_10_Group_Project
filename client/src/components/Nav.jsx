import { Link } from "react-router-dom"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Nav = () => {



    return(<>
        <header>
            <nav className="nav">
                <h3>Pizza Pete's</h3>
                <button><Link to={'/'}>Home</Link></button>
                <button><Link to={'/pizzaform'}>Order</Link></button>
                <button><Link to={'/'}>Account</Link></button>
                <button>Logout</button>
            </nav>
        </header>
    </>)
}

export default Nav