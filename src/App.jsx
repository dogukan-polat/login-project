import { Routes, Route } from 'react-router'
import './App.css'
import Login from './components/Login'
import Success from './components/Success'

function App() {
  
  return (
    <>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </>
  )
}

export default App
