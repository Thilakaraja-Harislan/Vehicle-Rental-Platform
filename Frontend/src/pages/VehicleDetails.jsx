import { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, vehicle as vehicleData } from "../assets/assets";
import Loader from "../components/Loader";


export default function VehicleDetails() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState();

  useEffect(() => {
    const foundVehicle = vehicleData.find(
      (vehicle) => vehicle.id === parseInt(id)
    );
    setVehicle(foundVehicle);
  },[id]);

    // Determine vehicle type based on category
  const vehicleType = useMemo(() => {
    if (!vehicle) return "car";
    const category = vehicle.category?.toLowerCase() || "";
    
    const bikeKeywords = ["bike", "motorcycle", "scooter", "motorbike", "atv"];
    const vanKeywords = ["van", "minivan", "suv", "mpv", "pickup", "truck", "lorry", "minibus"];
    
    if (bikeKeywords.some(keyword => category.includes(keyword))) return "bike";
    if (vanKeywords.some(keyword => category.includes(keyword))) return "van";
    
    return "car";
  }, [vehicle]);

    // Vehicle-specific features based on type
  const vehicleFeatures = useMemo(() => {
    const baseFeatures = {
      car: [
        "360 Camera",
        "Bluetooth Connectivity",
        "GPS Navigation",
        "Heated Seats",
        "Rear View Camera",
        "Lane Assist",
        "Cruise Control",
        "Climate Control",
        "Parking Sensors",
        "Apple CarPlay/Android Auto",
        "Sunroof/Moonroof",
        "Leather Seats"
      ],
      bike: [
        "ABS Braking System",
        "Traction Control",
        "Riding Modes",
        "Digital Instrument Cluster",
        "LED Lighting",
        "Quick Shifter",
        "Cruise Control",
        "Smartphone Connectivity",
        "Helmet Lock",
        "USB Charging Port",
        "Adjustable Suspension",
        "Anti-theft System"
      ],
      van: [
        "Spacious Cargo Area",
        "Sliding Side Doors",
        "Rear Parking Camera",
        "Bluetooth Connectivity",
        "GPS Navigation",
        "Cruise Control",
        "Climate Control",
        "Power Windows & Mirrors",
        "Multiple Airbags",
        "Stability Control",
        "Roof Rails",
        "Towing Package"
      ]
    };
    return baseFeatures[vehicleType] || baseFeatures.car;
  }, [vehicleType]);

    // Vehicle-specific specifications based on type
  const vehicleSpecs = useMemo(() => {
    const baseSpecs = [
      {
        icon: vehicleType === "bike" ? assets.speed_icon : assets.users_icon,
        text: vehicleType === "bike" 
          ? `${vehicle?.engine_cc || "N/A"} CC`
          : `${vehicle?.seat_capacity || "N/A"} Seats`,
        color: vehicleType === "bike" 
          ? "bg-orange-50 text-orange-700" 
          : vehicleType === "van"
          ? "bg-amber-50 text-amber-700"
          : "bg-blue-50 text-blue-700",
        label: vehicleType === "bike" ? "Engine" : "Seats"
      },
      {
        icon: assets.fuel_icon,
        text: vehicle?.fuel_type || "N/A",
        color: "bg-green-50 text-green-700",
        label: "Fuel Type"
      },
      {
        icon: vehicleType === "bike" 
          ? assets.bike_icon 
          : vehicleType === "van"
          ? assets.van_icon || assets.car_icon
          : assets.car_icon,
        text: vehicle?.transmission || "N/A",
        color: vehicleType === "bike"
          ? "bg-purple-50 text-purple-700"
          : vehicleType === "van"
          ? "bg-amber-100 text-amber-800"
          : "bg-purple-50 text-purple-700",
        label: "Transmission"
      },
      {
        icon: assets.location_icon,
        text: vehicle?.location || "N/A",
        color: "bg-gray-50 text-gray-700",
        label: "Location"
      }
    ];
    
    // Add bike-specific specs
    if (vehicleType === "bike" && vehicle) {
      return [
        ...baseSpecs,
        {
          icon: assets.weight_icon,
          text: vehicle?.weight ? `${vehicle.weight} kg` : "N/A",
          color: "bg-red-50 text-red-700",
          label: "Weight"
        },
        {
          icon: assets.speed_icon,
          text: vehicle?.top_speed ? `${vehicle.top_speed} km/h` : "N/A",
          color: "bg-indigo-50 text-indigo-700",
          label: "Top Speed"
        }
      ];
    }
    
    // Add van-specific specs
    if (vehicleType === "van" && vehicle) {
      return [
        ...baseSpecs,
        {
          icon: assets.cargo_icon || assets.car_icon,
          text: vehicle?.cargo_capacity ? `${vehicle.cargo_capacity} m³` : "N/A",
          color: "bg-amber-50 text-amber-700",
          label: "Cargo Space"
        },
        {
          icon: assets.weight_icon,
          text: vehicle?.towing_capacity ? `${vehicle.towing_capacity} kg` : "N/A",
          color: "bg-blue-50 text-blue-700",
          label: "Towing Capacity"
        }
      ];
    }

    return baseSpecs;
  }, [vehicleType, vehicle]);

  
    // Get vehicle type color theme
  const getTypeColor = (type) => {
    switch(type) {
      case "bike": return {
        badge: "from-orange-500 to-red-500",
        light: "bg-orange-50 text-orange-800",
        gradient: "from-orange-50 to-red-50",
        button: "from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700",
        border: "border-orange-100"
      };
      case "van": return {
        badge: "from-green-400 to-green-700",
        light: "bg-green-100 text-green-800",
        gradient: "from-green-50 to-green-50",
        button: "from-green-600 to-green-600 hover:from-green-700 hover:to-green-700",
        border: "border-green-100"
      };
      default: return {
        badge: "from-blue-500 to-indigo-500",
        light: "bg-blue-100 text-blue-800",
        gradient: "from-blue-50 to-indigo-50",
        button: "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
        border: "border-blue-100"
      };
    }
  };

  if (!vehicle) return <Loader />;

  const typeColor = getTypeColor(vehicleType);

return(
  <div>
     <div>
        <button onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-5 py-3 mb-8 text-white
          bg-black rounded-lg shadow-sm transition-all duration-200  mt-5 ml-5 border-gray-200 font-medium">

           <img src={assets.arrow_icon} alt="Back" 
           className="w-6 h-6 bg-black transform rotate-180 "/>
           Back
        </button>
        
          {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Image & Specifications */}
            <div className="lg:col-span-2 space-y-8">
              {/* Vehicle Image */}
              <div className="relative rounded-xl overflow-hidden -mt-5 bg-gray-100">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                    vehicleType === "bike" ? "h-80 md:h-96" : 
                    vehicleType === "van" ? "h-72 md:h-88" : "h-64 md:h-96"
                  }`}
                />
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${typeColor.badge} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                  Available Now
                </div>
              </div>

              {/* Vehicle Title & Info */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {vehicle.brand} {vehicle.model}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${typeColor.light}`}>
                    {vehicle.category}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {vehicle.year}
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    ${vehicle.price_per_day?.toLocaleString() || "N/A"}
                    <span className="text-sm font-normal text-gray-500">/day</span>
                  </span>
                </div>
              </div>

                {/* Specifications Grid */}
                <div className={`grid gap-4 ${
                  vehicleType === "bike" 
                    ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6" 
                    : vehicleType === "van"
                    ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
                    : "grid-cols-2 md:grid-cols-4"
                }`}>
                  {vehicleSpecs.map(({ icon, text, color, label }) => (
                    <div
                      key={label}
                      className={`${color} rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-200`}
                    >
                      <img
                        src={icon}
                        alt={label}
                        className="w-6 h-6 mb-2 opacity-90"
                      />
                      <span className="text-sm font-medium">{text}</span>
                      <span className="text-xs text-gray-500 mt-1">{label}</span>
                    </div>
                  ))}
                </div>
             
                  {/* Features Section */}
              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {vehicleType === "bike" ? "Bike Features" : 
                   vehicleType === "van" ? "Van Features" : "Car Features"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {vehicleFeatures.map((item) => (
                    <div
                      key={item}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        vehicleType === "bike"
                          ? "bg-orange-100"
                          : vehicleType === "van"
                          ? "bg-amber-100"
                          : "bg-blue-100"
                      }`}>
                        <img
                          src={assets.check_icon}
                          alt="✓"
                          className="w-4 h-4"
                        />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            </div>
           </div>
         </div>
     </div>
  );

}