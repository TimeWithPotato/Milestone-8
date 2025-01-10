import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar/NavBar'
import PriceOptions from './PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <NavBar />
      <PriceOptions />
    </>
  )
}

export default App
