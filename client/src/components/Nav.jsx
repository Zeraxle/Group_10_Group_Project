import { Link, useNavigate } from "react-router-dom"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { logUserIn, logOutUser } from "../services/UserServices"

const Nav = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const Logout = () => {
        if (id){
            logOutUser(id)
                .then(res => navigate('/'))
                .catch(err => console.log(err))
        }
    }


    return(<>
        <header>
            <nav className="nav">
                <h3>Pizza Pete's</h3>
                <div>
                    <button><Link to={'/home'}>Home</Link></button>
                    <button><Link to={'/pizzaform'}>Order</Link></button>
                    <button><Link to={'/user/account'}>Account</Link></button>
                    <button onClick={Logout}>Logout</button>
                </div>
            </nav>
        </header>
    </>)
}

export default Nav