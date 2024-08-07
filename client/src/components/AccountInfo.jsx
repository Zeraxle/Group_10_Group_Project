import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Nav from './Nav'
import { findUserById, getALLUsersPizzas, updateById} from '../services/UserServices'
import { deletePizzaById } from '../services/PizzaService'


export const AccountInfo = ({loggedInUser}) => {
    const [user, setUser] = useState({})
    const [usersPizzas, setUsersPizza] = useState([])
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: ''
    })

    useEffect(()=>{
        getALLUsersPizzas(loggedInUser.id)
        .then(res => {
            const user = res[0]
            const pizzas = user.pizzas
            // console.log(pizzas)
            setUsersPizza(pizzas)
        })
        .catch(err=>console.log(err))
    }, [])

    const updatePizzaBoolean = e => {
        const {name, value} = e. target
            let checkedValue = e.target.checked
    }

    useEffect(() => { 
        // console.log('user', loggedInUser)
        findUserById(loggedInUser.id)
        .then(res => {
            setUser(res)
            setErrors({
                firstName: true,
                lastName: true,
                email: true,
                address: true,
                city: true,
                state: true
            })
        })
        .catch(error => console.log(error))
    }, [])

    const changeHandler = e => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
    validateUserAttribute(name, value)
    }

    const validateUserAttribute = (name, value) => {
    const validations = {
        firstName : value => value.length >=2 && value.length <= 25 ? true : "First name must be at least two characters and less that twenty-five characters long.",
        lastName : value => value.length >= 2 && value.length <= 25 ? true : "Last name must be at least two characters and less than twenty-five characters long.",
        email : value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : "Please enter a valid email.",
        address: value => value.length >= 6 && value.length <= 50 ? true : "Address must be at least six characters and less than fifty characters long.",
        city: value => value.length >= 4 && value.length <= 50 ? true : "City must be at least four characters and less than fifty characters long.",
        state: value => value.length >= 4 && value.length <= 50 ? true : "State must be at least four characters and less than fifty characters long.",
        password : value => value.length >= 8 && value.length <= 50 ? true : "Password must be at least eight characters and less than fifty characters long.",
    }
    setErrors( prev => ( {...prev, [name] : validations[name](value)} ) )
}

    const readyToSubmit = () => {
    for ( let key in errors ){
        if( errors[key] !== true ){
            return false
        }
    }
    return true
}

    
    const submitHandler = e => {
    e.preventDefault()
    if(!readyToSubmit()){
        alert("Please fill out form correctly. Thank you.")
        return
    }
    updateById(user)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const deleteHandler = id => {
        deletePizzaById(id)
        .then(res => console.log(res))
        .catch(err=> console.log(err))
        setUsersPizza(prev=> prev.filter(pizza=> id != pizza.id))
    } 
        
    
    return (<>
    
    <div className="container">
        {/* <Nav/> */}
        <div className="account-box">
            <div className="card-body">
                <h2 className='text-center text-danger'>Account Info</h2>
                <form onSubmit={submitHandler}>
                <div className="form-group m-3">
                    <label className='form-label m-3'>
                    First Name:
                    <input
                        type="text"
                        name='firstName'
                        value={user.firstName}
                        onChange={changeHandler}
                        className='form-control'
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                    </label>
                    <label className='form-label'>
                    Last Name:
                    <input
                        type="text"
                        name='lastName'
                        value={user.lastName}
                        onChange={changeHandler}
                        className='form-control'
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                    </label>
                </div>
                    
                <div className="form-group">
                    <label className='form-label'>
                    Email:
                    <input
                        type="email"
                        name='email'
                        value={user.email}
                        onChange={changeHandler}
                        className='form-control'
                    />
                    {errors.email && <p>{errors.email}</p>}
                    </label>
                </div>
                <div className="form-group">
                    <label className='form-label'>
                    Address:
                    <input
                        type="text"
                        name='address'
                        value={user.address}
                        onChange={changeHandler}
                        className='form-control'
                    />
                    {errors.address && <p>{errors.address}</p>}
                    </label>
                </div>
                <div className="form-group">
                    <label className='form-label m-3'>
                    City:
                    <input
                        type="text"
                        name='city'
                        value={user.city}
                        onChange={changeHandler}
                        className='form-control'
                    />
                    {errors.city && <p>{errors.city}</p>}
                    </label>
                    <label className='form-label'>
                    State:
                    <input
                        type="text"
                        name='state'
                        value={user.state}
                        onChange={changeHandler}
                        className='form-control'
                    />
                    {errors.state && <p>{errors.state}</p>}
                    </label>
                </div>
                <div className="d-flex justify-content-center">
                    <input type="submit" value="Update" />
                </div>
                
                </form>
            </div>
            <section className="past-orders-section">
            <h2>Previously Ordered Pizzas</h2>
                {
                    usersPizzas.map( pizza => (
                        <div key={pizza.id}>
                            <p>{pizza.size} {pizza.crust}- {pizza.comments} {pizza.favorite ? "- Favorite Pizza" : ''}</p>
                            <button className='btn btn-outline-danger btn-sm' onClick={()=>deleteHandler(pizza.id)}>Delete</button>
                        </div>
                    ))
                }
            </section>
        </div>
    </div>
    </>)
}

