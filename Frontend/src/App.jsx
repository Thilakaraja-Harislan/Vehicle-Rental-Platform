import { useState } from 'react'
import './App.css'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="font-sans">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
