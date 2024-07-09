import { Link, useNavigate } from "react-router-dom"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { logUserIn } from "../services/UserServices"

const Nav = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const logOutUser = () => {
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
                    <button><Link to={'/'}>Home</Link></button>
                    <button><Link to={'/pizzaform'}>Order</Link></button>
                    <button><Link to={'/user/account'}>Account</Link></button>
                    <button onClick={logOutUser}>Logout</button>
                </div>
            </nav>
        </header>
    </>)
}

export default Nav