import {Routes, Route} from 'react-router-dom'
import './App.css'
import { RegistrationForm } from './components/RegistrationForm'
import { LoginForm } from './components/LoginForm'

function App() {

  return (<>
  <Routes>
    <Route path='/' element={<RegistrationForm/>}/>
    <Route path='/login' element={<LoginForm/>}/>
  </Routes>
  </>)
}

export default App
