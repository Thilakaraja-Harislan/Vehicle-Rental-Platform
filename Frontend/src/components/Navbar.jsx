import { useState } from 'react';
import {assets, menuLinks} from '../assets/assets'
import {Link, useLocation} from 'react-router-dom'

export default function Navbar() {
   const location = useLocation();
   const [open, setOpen] = useState(false);

  return (

   <div className={`flex item-center justify-between px-6 md:px-16 lg:px-24
                    xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all
                    ${location.pathname === "/" && "bg-light"}`}>

       <Link to="/" className="flex items-center h-10">
       <img
          src={assets.logo}
          alt="logo"
          className="h-full w-auto object-contain"/>

  <span className="ml-3 text-lg font-bold text-black leading-none">
    FlexiRide
  </span>
</Link>

       <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 
                        max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row gap-6 sm:gap-8 
                        duration-300 z-50 ${location.pathname === "/" ? "bg-light" : "bg-white"} 
                        ${open ? "max-sm:transilate-x-0" : "max-sm:translate-x-full"}`}>

        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path}  className="px-3 py-2 rounded-md transition-all duration-200 hover:font-bold hover:text-fuchsia-400"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
              {link.name}
          </Link>
        ))}
       </div>

     

       <button className="bg-black text-white px-5 py-2 rounded-full transition-all duration-500 hover:bg-fuchsia-400">
        Get Started
      </button>
      </div>
  );
}
