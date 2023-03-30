import { useState } from 'react'

import './App.css'
import Home from './Components/Home/Home'
import SideCard from './Components/SideCard/SideCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <div className="main grid grid-cols-2">
      <div className="home-container grid-cols-3 ">
        <Home></Home>
      </div>
      <div className="sideCard grid-cols-1 sticky">
        <SideCard></SideCard>
      </div>
    </div>
    </div>
  )
}

export default App
