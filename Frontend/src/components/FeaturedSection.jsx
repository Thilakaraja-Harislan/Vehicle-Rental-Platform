import { vehicle, assets } from '../assets/assets'
import { VehicleCard } from './VehicleCard'
import { Title } from './Title'
import { useNavigate } from 'react-router-dom'

export const FeaturedSection = () => {

   const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16
    lg:px-24 xl:px-32 mt-20 bg-fuchsia-50 mt-40'>
        <div>
            <Title title='Featured Vehicles' subTitle='Explore our selection of 
                premium vehicles avilable for your next adventure'/>
        </div>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
            {
                vehicle.slice(0,6).map((vehicle)=> (
                    <div key={vehicle.id}> 
                        <VehicleCard vehicle={vehicle}/>
                    </div>
                ))
            }
         </div>

         <button onClick={() => {
            navigate('/vehicle'); scrollTo(0,0)
         }}
         className='flex items-center justify-center gap-2 text-white px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-700 
         transition-colors duration-300 rounded-md mt-18 cursor-pointer'>
            Explore all vehicles <img className='h-5 w-5' src={assets.arrow_icon} alt="arrow"/>
         </button>

    </div>
  )
}
