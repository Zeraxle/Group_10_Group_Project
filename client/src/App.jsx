import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import { RegistrationForm } from './components/RegistrationForm'
import { LoginForm } from './components/LoginForm'
import { QuickOptions } from './components/QuickOptions'
import { PizzaForm } from './components/PizzaForm'
import { AccountInfo } from './components/AccountInfo'
import Nav from './components/Nav'
import { UpdatePizzaForm } from './components/UpdatePizzaForm'

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [loggedInUserPizza, setLoggedInUserPizza] = useState({})
  return (<>
  <Nav loggedInUser={loggedInUser}/>
  <Routes>
    <Route path='/' element={<RegistrationForm setLoggedInUser={setLoggedInUser}/>}/>
    <Route path='/login' element={<LoginForm setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser}/>}/>
    <Route path='/home' element={<QuickOptions loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>}/>
    <Route path='/pizzaform' element={<PizzaForm loggedInUser={loggedInUser}/>}/>
    <Route path='/account' element={<AccountInfo setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} setLoggedInUserPizza={setLoggedInUserPizza}/>}/>
    <Route path='/favpizzaform' element={<UpdatePizzaForm loggedInUser={loggedInUser}/>}/>
    {/* <Route path='/logout' element={<Nav loggedInUser={loggedInUser}/>}/> */}
  </Routes>
  </>)
}

export default App
