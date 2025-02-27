import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <DaisyNav />
    </>
  )
}

export default App
