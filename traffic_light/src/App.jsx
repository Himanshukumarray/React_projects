import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Traffic_light from './component/traffic_light'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Traffic_light/>
  )
}

export default App
