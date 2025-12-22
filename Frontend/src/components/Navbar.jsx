import { useState } from 'react';
import {assets, menuLinks} from '../assets/assets'
import {Link, useLocation} from 'react-router-dom'

export default function Navbar() {
   const location = useLocation();
   const [open, setOpen] = useState(false);

  return (

   <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24
                    xl:px-12 py-4 text-gray-600 relative transition-all
                    ${location.pathname === "/" && "bg-light"}`}>

       {/* Logo on the left */}
       <Link to="/" className="flex items-center h-10">
         <img
            src={assets.logo}
            alt="logo"
            className="h-full w-auto object-contain"/>

         <span className="ml-3 text-lg font-bold text-black leading-none">
             FlexiRide
         </span>
       </Link>

       <div className="flex sm:hidden items-center gap-2">
          {/* Mobile Search Box */}
           <div className='flex items-center text-sm border 
                  border-borderColor px-2 py-1 rounded-full w-40'>
             <input type="text" className='py-1 w-full bg-transparent outline-none text-sm
                                 placeholder-gray-500' placeholder='Search...'/>
                <img src={assets.search_icon} alt="Search" className='h-4 w-4 ml-1 object-contain'/>
           </div>

          {/* Mobile menu button */}
           <button className='cursor-pointer' aria-label="Menu" onClick={() => setOpen(!open)}>
              <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" className="w-10 h-10" />
           </button>
        </div>

       {/* Desktop Navigation (center) */}
       <div className="hidden sm:flex ml-55 items-center gap-6 sm:gap-8">
         {menuLinks.map((link, index) => (
           <Link key={index} to={link.path} className="px-3 py-2 rounded-md transition-all duration-200 hover:font-bold hover:text-fuchsia-400"
                 style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
               {link.name}
           </Link>
         ))}
       </div>

       {/* Right side: Search + Get Started (desktop) */}
       <div className="hidden sm:flex items-center gap-4">
         {/* Search box - hidden on mobile, shown on large screens */}
         <div className='hidden lg:flex items-center text-sm gap-2 border 
                        border-borderColor px-3 rounded-full max-w-56'>
           <input type="text" className='py-1.5 w-full bg-transparent outline-none
           placeholder-gray-500' placeholder='Search Vehicles'/>
           <img src={assets.search_icon} alt="Search" className='h-4 w-4 mr-5 object-contain'/>
         </div>

         {/* Get Started button */}
         <button className="bg-black text-white px-5 py-2 rounded-full transition-all duration-500 hover:bg-fuchsia-400">
           Get Started
         </button>
       </div>

       {/* Mobile Menu (full screen overlay) */}
       <div className={`sm:hidden fixed h-screen w-full top-16 left-0
                        border-t border-borderColor flex flex-col items-center gap-6 py-8
                        duration-300 z-40 ${location.pathname === "/" ? "bg-light" : "bg-white"} 
                        ${open ? "translate-x-0" : "translate-x-full"}`}>

         {menuLinks.map((link, index) => (
           <Link key={index} to={link.path} onClick={() => setOpen(false)}
                 className="px-3 py-2 rounded-md transition-all duration-200 hover:font-bold hover:text-fuchsia-400"
                 style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
               {link.name}
           </Link>
         ))}

         

         {/* Mobile Get Started button */}
         <button className="bg-black text-white px-5 py-2 rounded-full transition-all duration-500 hover:bg-fuchsia-400">
           Get Started
         </button>
       </div>

    </div>
  );
}