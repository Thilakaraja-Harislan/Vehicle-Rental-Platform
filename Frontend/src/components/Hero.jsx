import {assets, cities} from '../assets/assets'
import { useState, useEffect } from 'react';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of background images
  const backgroundImages = [
    assets.background_vehicle,
    assets.background_vehicle02,
    assets.background_vehicle03
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <section
        className="bg-gradient-to-br
                   bg-cover bg-center bg-no-repeat
                   rounded-b-[100px] px-4 md:px-6 lg:px-10
                   py-30 md:py-90 lg:py-90
                   text-white text-center relative overflow-hidden
                   transition-all duration-2000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentSlide]})`
        }}
      >
        <div className="relative z-10 -mt-8 md:-mt-50">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-xl mx-auto px-4">
            The Best Platform for Vehicle Rental
          </h1>
          <p className="text-base md:text-xl mt-4 text-fuchsia-200 mx-auto mb-6 px-4">
            We open the door for you to emphasizes flexibility.
          </p>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      <form className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6
                 p-4 sm:p-4 md:p-8 rounded-2xl md:rounded-full w-[90%] max-w-4xl mx-auto
                 bg-white/10 backdrop-blur-md border border-white/20
                 shadow-[0px_8px_32px_rgba(0,0,0,0.1)]
                 mt-10 sm:mt-10 md:-mt-55 relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 w-full">
          
          {/* Pickup Location */}
          <div className="w-full md:flex-1 min-w-0">
            <label className="block text-sm font-medium text-black ml-1 mb-2">
              Pickup Location
            </label>
           <select required  
           className="w-full px-4 py-3 rounded-lg border border-white/30
                      bg-white/20 backdrop-blur-sm
                      focus:outline-none focus:ring-2 focus:ring-fuchsia-500 
                      focus:border-transparent text-gray-600 text-sm md:text-base
                      [&>option]:text-gray-800 [&>option]:bg-white">
                <option value="">Select a city</option>
                     {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                           {city.name}
                        </option>
                     ))}
            </select>
          </div>

          {/* Pick-up Date */}
          <div className="w-full md:flex-1 min-w-0">
            <label htmlFor="pickup-date" className="block text-sm font-medium text-black mb-2">
              Pick-up Date
            </label>
            <input 
              type="date" 
              id='pickup-date' 
              min={new Date().toISOString().split('T')[0]}
               className='w-full px-4 py-3 rounded-lg border border-white/30
             bg-white/20 backdrop-blur-sm
             focus:outline-none focus:ring-2 focus:ring-fuchsia-500 
             focus:border-transparent text-gray-600 text-sm md:text-base
             [color-scheme:dark]'
              required
            />
          </div>

          {/* Return Date */}
          <div className="w-full md:flex-1 min-w-0">
            <label htmlFor="return-date" className="block text-sm font-medium text-black mb-2">
              Return Date
            </label>
            <input 
              type="date" 
              id='return-date'
              min={new Date().toISOString().split('T')[0]}
              className='w-full px-4 py-3 rounded-lg border border-white/30
             bg-white/20 backdrop-blur-sm
             focus:outline-none focus:ring-2 focus:ring-fuchsia-500 
             focus:border-transparent text-gray-600 text-sm md:text-base
             [color-scheme:dark]'
              required
            />
          </div>

          {/* Submit Button */}
          <div className="w-full md:flex-1 min-w-0">
            <button 
              type="submit"
              className="w-full px-8 py-3 md:mt-6 bg-fuchsia-600 text-white 
                       rounded-lg hover:bg-fuchsia-700 transition-colors duration-300
                       font-semibold shadow-md hover:shadow-lg text-sm md:text-base"
            >
              Find Vehicle
            </button>
          </div>

        </div>
      </form>
    </>
  );
}