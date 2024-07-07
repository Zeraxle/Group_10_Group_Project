import {Routes, Route} from 'react-router-dom'
import './App.css'
import { RegistrationForm } from './components/RegistrationForm'

function App() {

  return (<>
  <Routes>
    <Route path='/' element={<RegistrationForm/>}/>
  </Routes>
  </>)
}

export default App
