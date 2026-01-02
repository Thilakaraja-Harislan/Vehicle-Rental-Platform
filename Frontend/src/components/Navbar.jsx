import { useEffect, useState } from 'react';
import {assets, menuLinks} from '../assets/assets'
import {Link, useLocation} from 'react-router-dom'

export default function Navbar() {
   const location = useLocation();
   const [open, setOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
    if(open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
   }, [open]);

  return (

   <div className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24
                    xl:px-12 py-4 text-gray-600 relative transition-all bg-gray-200 border-gray-800 shadow-gray-800

                    ${location.pathname === "/" && "bg-light"}`}>

       {/* Logo on the left */}
       <Link to="/" className="flex items-center h-10 md:h-10 z-50">
         <img
            src={assets.logo}
            alt="logo"
            className="h-full w-auto object-contain"/>

         <span className="ml-3 text-lg font-bold text-black leading-none">
             FlexiRide
         </span>
       </Link>

       {/* Mobile & Tablet Menu Button - Hidden on lg and above */}
       <div className="flex lg:hidden items-center gap-2 z-50">
           {/* Mobile/Tablet Search Box */}
           <div className='flex items-center text-sm border 
                  border-borderColor px-2 py-1 rounded-full w-50'>
             <input type="text" className='py-1 w-full bg-transparent outline-none text-sm
                                 placeholder-gray-500' placeholder='Search...'/>
                <img src={assets.search_icon} alt="Search" className='h-4 w-4 ml-1 object-contain'/>
           </div>

          {/* Mobile/Tablet Menu Button */}
           <button className='cursor-pointer' aria-label="Menu" onClick={() => setOpen(!open)}>
              <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" className="w-10 h-10" />
           </button>
        </div>

        {/* Desktop Navigation (center) - Hidden on mobile/tablet, shown on lg and above */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6 xl:gap-8">
         {menuLinks.map((link, index) => (
           <Link key={index} to={link.path} className="px-3 py-2 rounded-md transition-all duration-200 hover:font-bold hover:text-fuchsia-400"
                 style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
               {link.name}
           </Link>
         ))}
       </div>

       {/* Right side: Search + Get Started (desktop) */}
       <div className="hidden lg:flex items-center gap-4">
         {/* Search box - hidden on mobile, shown on large screens */}
         <div className='flex items-center text-sm gap-2 border 
                        border-borderColor px-3 rounded-full max-w-56'>
           <input type="text" className='py-1.5 w-full bg-transparent outline-none
           placeholder-gray-500' placeholder='Search Vehicles'/>
           <img src={assets.search_icon} alt="Search" className='h-4 w-4 mr-5 object-contain'/>
         </div>

         {/* Desktop Get Started button - Only shown on lg and above */}
         <button className="bg-black text-white px-5 py-2 rounded-full transition-all duration-500 hover:bg-fuchsia-400">
           Get Started
         </button>
       </div>

      {/* Mobile & Tablet Menu Overlay - hidden on lg and above */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40
                      flex flex-col items-center pt-24 md:pt-28 gap-6 md:gap-8
                      transition-transform duration-300 ease-in-out
                      ${open ? "translate-x-0" : "translate-x-full"}`}>

         {menuLinks.map((link, index) => (
           <Link key={index} to={link.path} onClick={() => setOpen(false)}
                 className="px-3 py-2 rounded-md transition-all duration-200 hover:font-bold hover:text-fuchsia-400"
                 style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
               {link.name}
           </Link>
         ))}

         

              {/* Get Started button in mobile/tablet menu */}
        <button 
          onClick={() => setOpen(false)}
          className="bg-black text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-lg md:text-xl transition-all duration-500 hover:bg-fuchsia-400 mt-6"
        >
          Get Started
        </button>
       </div>

    </div>
  );
}