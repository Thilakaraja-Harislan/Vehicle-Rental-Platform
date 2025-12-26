import { assets } from '../assets/assets'

export const VehicleCard = ({vehicle}) => {
  const currency = import.meta.env.VITE_CURRENCY

  return (
    <div className='group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1
    transition-all duration-500 cursor-pointer'>
      <div className='relative h-48 overflow-hidden'>
        <img src={vehicle.image} alt="vehicle Image" className='w-80 h-full boject-cover
             transition-transform duration-500 group-hover:scale-105'/>

        {vehicle.isAvailable && <p className='absolute top-4 left-4 bg-primary/90 
           text-white text-xs px-2.5 py-1 rounded-full bg-green-500'>Available Now</p>}

           <div className='absolute bottom-4 right-4 bg-fuchsia-400
                backdrop-blur-smtext-white px-2 py-1 rounded-lg'>
                  <span className='font-semibold'>{currency}{vehicle.price_per_day}</span>
                  <span className='text-sm text-white/80'> / day</span>
            </div>
       </div>

      <div className='p-4 sm:p-5'>
        <div className='flex justify-between items-start mb-2'>
          <div>
            <h3 className='text-lg font-medium'>{vehicle.brand} {vehicle.model}</h3>
            <p className='text-muted-foreground text-sm'>{vehicle.category} {vehicle.year}</p>
          </div>
        </div>

        <div className='mt-4 grid grid-cols-2 gap-y-2 text-gray-600'>
          <div className='flex items-center text-sm text-muted-foreground'>
            <img src={assets.users_icon} alt="" className='h-4 mr-2'/>
            <span>{vehicle.seat_capacity} Seats</span>
          </div>

          <div className='flex items-center text-sm text-muted-foreground'>
            <img src={assets.fuel_icon} alt="" className='h-4 mr-2'/>
            <span>{vehicle.fuel_type}</span>
          </div>

          <div className='flex items-center text-sm text-muted-foreground'>
            <img src={assets.vehicleIcon} alt="" className='h-6 mr-2'/>
            <span>{vehicle.transmission}</span>
          </div>

          <div className='flex items-center text-sm text-muted-foreground'>
            <img src={assets.location_icon} alt="" className='h-4 mr-2'/>
            <span>{vehicle.location}</span>
          </div>
        </div>

      </div>

    </div>
  )
}
