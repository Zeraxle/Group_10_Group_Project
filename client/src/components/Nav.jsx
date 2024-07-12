import { Link, useNavigate } from "react-router-dom"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { logOutUser } from "../services/UserServices"

const Nav = ({loggedInUser, setLoggedInUser}) => {

    if(loggedInUser.id){
        // const {loggedInUser} = props
    const navigate = useNavigate()
    const Logout = () => {
        logOutUser(loggedInUser.id)
            .then(res => {
                setLoggedInUser({})
                navigate('/')
            })
            .catch(err => console.log(err))
        
    }
    


    return(<>
        <header>
            <nav className="nav">
                <h3>Pizza Pete's</h3>
                <div>
                    <button><Link to={`/home`}>Home</Link></button>
                    <button><Link to={'/pizzaform'}>Order</Link></button>
                    <button><Link to={`/account`}>Account</Link></button>
                    <button onClick={Logout}>Logout</button>
                </div>
            </nav>
        </header>
    </>)
    }
}

export default Nav