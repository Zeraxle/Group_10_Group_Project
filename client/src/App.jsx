import {Routes, Route} from 'react-router-dom'
import './App.css'
import { RegistrationForm } from './components/RegistrationForm'
import { LoginForm } from './components/LoginForm'
import { QuickOptions } from './components/QuickOptions'
import { AccountInfo } from './components/AccountInfo'

function App() {

  return (<>
  <Routes>
    <Route path='/' element={<RegistrationForm/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/home' element={<QuickOptions/>}/>
    <Route path='/user/account' element={<AccountInfo/>}/>
  </Routes>
  </>)
}

export default App
