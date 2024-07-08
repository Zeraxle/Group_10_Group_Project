import {Routes, Route} from 'react-router-dom'
import './App.css'
import { RegistrationForm } from './components/RegistrationForm'
import { LoginForm } from './components/LoginForm'
import { QuickOptions } from './components/QuickOptions'

function App() {

  return (<>
  <Routes>
    <Route path='/' element={<RegistrationForm/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/home' element={<QuickOptions/>}/>
  </Routes>
  </>)
}

export default App
