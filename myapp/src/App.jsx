import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Count from './components/Count'
import Print from './components/Print'
import Api from './components/Api'
import Pockeymon from './components/Pockeymon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1> WELCOME TO REACT </h1>
      
      <Routes>
        <Route path='/lg' element={<Login />} />
        <Route path='/sp' element={<Signup />} />
        <Route path='/sb' element={<StateBasics />} />
        <Route path='/add' element={<Count />} />
        <Route path='/p' element={<Print />} />
        <Route path='/api' element={<Api/>} />
        <Route path='/poke' element={<Pockeymon/>} />
      </Routes>
      
      
      
    </>
  )
}

export default App
