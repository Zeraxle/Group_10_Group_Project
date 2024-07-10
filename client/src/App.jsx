import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import { RegistrationForm } from './components/RegistrationForm'
import { LoginForm } from './components/LoginForm'
import { QuickOptions } from './components/QuickOptions'
import { PizzaForm } from './components/PizzaForm'
import { AccountInfo } from './components/AccountInfo'
import Nav from './components/Nav'

function App() {

    const [allUsers, setAllUsers] = useState([])
    const [loggedInUser, setLoggedInUser] = useState()
    

  return (<>
  <Routes>
    <Route path='/' element={<RegistrationForm setLoggedInUser={setLoggedInUser} setAllUsers={setAllUsers}/>}/>
    <Route path='/login' element={<LoginForm setLoggedInUser={setLoggedInUser}/>}/>
    <Route path='/home' element={<QuickOptions loggedInUser={loggedInUser}/>}/>
    <Route path='/pizzaform' element={<PizzaForm loggedInUser={loggedInUser}/>}/>
    <Route path='/account/:id' element={<AccountInfo loggedInUser={loggedInUser}/>}/>
    <Route path='/logout/:id' element={<Nav loggedInUser={loggedInUser}/>}/>
  </Routes>
  </>)
}

export default App
