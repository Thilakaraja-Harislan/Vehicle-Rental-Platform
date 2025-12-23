import { useState } from 'react'
import './App.css'

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="font-sans">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
