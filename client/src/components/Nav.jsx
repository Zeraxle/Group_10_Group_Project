import { Link } from "react-router-dom"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Nav = () => {



    return(<>
        <header>
            <nav className="nav">
                <h3>Pizza Pete's</h3>
                <div>
                    <button><Link to={'/'}>Home</Link></button>
                    <button><Link to={'/pizzaform'}>Order</Link></button>
                    <button><Link to={'/user/account'}>Account</Link></button>
                    <button><Link to={'/'}>Logout</Link></button>
                </div>
            </nav>
        </header>
    </>)
}

export default Nav