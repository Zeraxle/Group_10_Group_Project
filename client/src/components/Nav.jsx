import { Link } from "react-router-dom"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Nav = () => {



    return(<>
        <header>
            <nav className="nav">
                <button><Link to={'/'}>Home</Link></button>
                <button><Link to={'/'}>Order</Link></button>
                <button><Link to={'/'}>Account</Link></button>
                <button><Link to={'/'}>Logout</Link></button>
            </nav>
        </header>
    </>)
}

export default Nav