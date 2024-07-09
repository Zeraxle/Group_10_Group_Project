import {Routes, Route} from 'react-router-dom'
import './App.css'
import { RegistrationForm } from './components/RegistrationForm'
import { LoginForm } from './components/LoginForm'
import { QuickOptions } from './components/QuickOptions'
import { PizzaForm } from './components/PizzaForm'
import { AccountInfo } from './components/AccountInfo'
import Nav from './components/Nav'

function App() {

  return (<>
  <Routes>
    <Route path='/' element={<RegistrationForm/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/home' element={<QuickOptions/>}/>
    <Route path='/pizzaform' element={<PizzaForm/>}/>
    <Route path='/:id/account' element={<AccountInfo/>}/>
    <Route path='/logout/:id' element={<Nav/>}/>
  </Routes>
  </>)
}

export default App
