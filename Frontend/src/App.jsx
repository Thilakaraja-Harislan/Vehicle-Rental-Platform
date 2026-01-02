import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import VehicleDetails from './pages/VehicleDetails';
import Vehicles from './pages/Vehicles';
import MyBookings from './pages/MyBookings';
import Footer from "./components/Footer";

function App() {
  const [showLogin, setShowLogin] = useState(0)

  return (
     <div className="font-sans">
      <Navbar setShowLogin={setShowLogin}/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/vehicle-details/:id' element={<VehicleDetails/>}/>
        <Route path='/Vehicles' element={<Vehicles/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>

      <Footer />

    </div>
  )
}

export default App
