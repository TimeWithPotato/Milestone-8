import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Phones from './phones/phones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Phones />
    </>
  )
}

export default App
