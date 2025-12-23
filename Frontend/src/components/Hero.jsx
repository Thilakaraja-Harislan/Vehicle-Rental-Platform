import {assets, cities} from '../assets/assets'

export default function Hero() {
  return (
    <>
      <section className="bg-gradient-to-br from-fuchsia-400 to-fuchsia-200 rounded-b-[100px] px-10 py-30 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-xl mx-auto">
          The Best Platform for Vehicle Rental
        </h1>
        <p className="text-l mt-4 max-w-md text-fuchsia-800 mx-auto mb-6">
          We open the door for you to emphasizes flexibility.
        </p>  
      </section>

      <form className="flex flex-col md:flex-row items-center justify-center gap-6
                     p-8 rounded-2xl md:rounded-full w-full max-w-4xl mx-auto
                     bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)] 
                     -mt-20 relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 w-full">
          
          {/* Pickup Location */}
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium text-gray-700 ml-1 mb-2">
              Pickup Location
            </label>
            <select 
              required 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-fuchsia-500 
                       focus:border-transparent text-gray-800"
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          {/* Pick-up Date */}
          <div className="flex-1 min-w-[150px]">
            <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mb-2">
              Pick-up Date
            </label>
            <input 
              type="date" 
              id='pickup-date' 
              min={new Date().toISOString().split('T')[0]}
              className='w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-fuchsia-500 
                       focus:border-transparent text-gray-800'
              required
            />
          </div>

          {/* Return Date */}
          <div className="flex-1 min-w-[150px]">
            <label htmlFor="return-date" className="block text-sm font-medium text-gray-700 mb-2">
              Return Date
            </label>
            <input 
              type="date" 
              id='return-date'
              min={new Date().toISOString().split('T')[0]}
              className='w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-fuchsia-500 
                       focus:border-transparent text-gray-800'
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium text-gray-700 mb-2 opacity-0">
              Find Vehicle
            </label>
            <button 
              type="submit"
              className="w-full px-8 py-3 bg-fuchsia-600 text-white 
                       rounded-lg hover:bg-fuchsia-700 transition-colors duration-300
                       font-semibold shadow-md hover:shadow-lg"
            >
              Find Vehicle
            </button>
          </div>

        </div>
      </form>

      <div className="flex justify-center mt-12 md:mt-8">
        <img 
          src={assets.hero_vehicle} 
          alt="Hero-Vehicle" 
          className="max-h-48 md:max-h-64 lg:max-h-80 w-auto" 
        />
      </div>
    </>
  );
}