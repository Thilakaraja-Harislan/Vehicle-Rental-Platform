import logo from "../assets/logo.svg";
import dashboardIcon from "../assets/dashboard.svg";
import dashboardIconColored from "../assets/dashboard-colored.svg";
import addIcon from "../assets/add.svg";
import addIconColored from "../assets/add-colored.svg";
import vehicleIcon from "../assets/vehicle.svg";
import vehicleIconColored from "../assets/vehicle-colored.svg";
import listIcon from "../assets/list.png";
import listIconColored from "../assets/list-colored.png";
import user_profile from "../assets/user-profile.svg"
import users_icon from "../assets/users.svg"
import fuel_icon from "../assets/fuel-icon.svg"
import location_icon from "../assets/location-icon.svg"
import arrow_icon from "../assets/arrow-icon02.svg"
import search_icon from "../assets/search-icon.png"
import menu_icon from "../assets/menu-icon.svg"
import close_icon from "../assets/close-icon.svg"
import hero_vehicle from "../assets/hero-vehicle.jpg"
import background_vehicle from "../assets/background-jeep.png"
import background_vehicle02 from "../assets/background-car.jpg"
import background_vehicle03 from "../assets/background-bike02.AVIF"

import toyotaPrius from "./vehicles/car/toyota-prius.jpg";
import suzukiAlto from "./vehicles/car/suzuki-alto.jpg";
import toyotaHiace from "./vehicles/van/toyota-hiace.jpg";
import bajajPulsar from "./vehicles/bike/bajaj-pulsar.webp";
import nissanCaravan from "./vehicles/van/nissan-caravan.jpg";
import Corolla from "./vehicles/car/Corolla.webp";
import Montero_Sport from "./vehicles/car/Montero-Sport.jpeg";
import Vezel from "./vehicles/car/Vezel.jpg";
import Sunny from "./vehicles/car/sunny.jpg";
import Land_Cruiser from "./vehicles/car/Land-Cruiser.jpg";
import Wagon_R from "./vehicles/car/Wagon-R.jpg";
import R15 from "./vehicles/bike/R15.jpeg";
import Mercedes_Benz from "./vehicles/car/Mercedes-Benz.jpeg";
import Noah from "./vehicles/van/Noah.jpg";
import Apache_RTR from "./vehicles/bike/Apache-RTR.jpg";



export const assets = {
    logo,
    dashboardIcon,
    dashboardIconColored,
    addIcon,
    addIconColored,
    vehicleIcon,
    vehicleIconColored,
    listIcon,
    listIconColored,
    user_profile,
    users_icon,
    fuel_icon,
    location_icon,
    arrow_icon,
    search_icon,
    menu_icon,
    close_icon,
    hero_vehicle,
    background_vehicle,
    background_vehicle02,
    background_vehicle03
};

export const menuLinks = [
    { name: "Home", path: "/"},
    { name: "Vehicles", path: "/Vehicles"},
    { name: "My Bookings", path: "/my-bookings"},
    { name: "About Us", path: "/about-us"},
]

export const adminMenuLinks = [
    { name: "Dashboard", path: "/admin", icon: dashboardIcon, ColoredIcon: dashboardIconColored},
    { name: "Add Vehicles", path: "/admin/add-vehicle", icon: addIcon, ColoredIcon: addIconColored},
    { name: "Manage Vehicles", path: "/admin/manage-vehicles", icon: vehicleIcon, ColoredIcon: vehicleIconColored},
    { name: "Manage Bookings", path: "/admin/manage-bookings", icon: listIcon, ColoredIcon: listIconColored},
]

export const cities = [
  { id: 1, name: "Colombo" },
  { id: 2, name: "Kandy" },
  { id: 3, name: "Galle" },
  { id: 4, name: "Negombo" },
  { id: 5, name: "Jaffna" },
  { id: 6, name: "Kurunegala" },
  { id: 7, name: "Anuradhapura" },
  { id: 8, name: "Nuwara Eliya" },
  { id: 9, name: "Matara" },
  { id: 10, name: "Batticaloa" }
];

export const users = [
  {
    id: 1,
    name: "Thilakaraja Harislan",
    email: "harislan@gmail.com",
    role: "customer",
    city: "Colombo",
    image: user_profile,
  },
  {
    id: 2,
    name: "Mahavishnu Thilakaraja",
    email: "thilakaraja@flexiride.com",
    role: "admin",
    city: "Kandy",
    image: user_profile,
  },
  {
    id: 3,
    name: "Thilakaraja Siyanthan",
    email: "siyanthan@gmail.com",
    role: "customer",
    city: "Galle",
    image: user_profile,
  }
];

export const vehicle = [
  {
    id: 1,
    owner: "FlexiRide Pvt Ltd",
    brand: "Toyota",
    model: "Prius",
    type: "Car",
    image: toyotaPrius,
    year: 2021,
    category: "Sedan",
    seat_capacity: 5,
    fuel_type: "Hybrid",
    transmission: "Automatic",
    price_per_day: 12000,
    location: "Colombo",
    description:
      "Comfortable and fuel-efficient hybrid car, ideal for city and long-distance travel.",
    isAvailable: true,
    withDriverAvailable: true,
    createdAt: "2024-12-10"
  },
  {
    id: 2,
    owner: "FlexiRide Pvt Ltd",
    brand: "Suzuki",
    model: "Alto",
    type: "Car",
    image: suzukiAlto ,
    year: 2019,
    category: "Hatchback",
    seat_capacity: 4,
    fuel_type: "Petrol",
    transmission: "Manual",
    price_per_day: 7500,
    location: "Kandy",
    description:
      "Budget-friendly compact car suitable for daily travel and short trips.",
    isAvailable: true,
    withDriverAvailable: false,
    createdAt: "2024-11-22"
  },
  {
    id: 3,
    owner: "FlexiRide Pvt Ltd",
    brand: "Toyota",
    model: "Hiace",
    type: "Van",
    image: toyotaHiace ,
    year: 2020,
    category: "Passenger Van",
    seat_capacity: 14,
    fuel_type: "Diesel",
    transmission: "Manual",
    price_per_day: 18000,
    location: "Negombo",
    description:
      "Spacious van perfect for group travel, tours, and airport transfers.",
    isAvailable: false,
    withDriverAvailable: true,
    createdAt: "2024-10-05"
  },
  {
    id: 4,
    owner: "FlexiRide Pvt Ltd",
    brand: "Bajaj",
    model: "Pulsar 150",
    type: "Bike",
    image: bajajPulsar ,
    year: 2022,
    category: "Motorbike",
    seat_capacity: 2,
    fuel_type: "Petrol",
    transmission: "Manual",
    price_per_day: 3500,
    location: "Galle",
    description:
      "Sporty bike suitable for quick city rides and solo travelers.",
    isAvailable: true,
    withDriverAvailable: false,
    createdAt: "2024-12-01"
  },
  {
    id: 5,
    owner: "FlexiRide Pvt Ltd",
    brand: "Nissan",
    model: "Caravan",
    type: "Van",
    image: nissanCaravan ,
    year: 2018,
    category: "Tour Van",
    seat_capacity: 12,
    fuel_type: "Diesel",
    transmission: "Manual",
    price_per_day: 16000,
    location: "Matara",
    description:
      "Reliable tour van with ample space for passengers and luggage.",
    isAvailable: true,
    withDriverAvailable: true,
    createdAt: "2024-09-18"
  },
   {
    id: 6,
    owner: "FlexiRide Pvt Ltd",
    brand: "Toyota",
    model: "Corolla",
    type: "Car",
    image: Corolla,
    year: 2022,
    category: "Sedan",
    seat_capacity: 5,
    fuel_type: "Petrol",
    transmission: "Automatic",
    price_per_day: 15000,
    location: "Colombo",
    description: "Popular sedan with modern features, comfortable for family trips.",
    isAvailable: true,
    withDriverAvailable: true,
    createdAt: "2024-11-15"
  },
  {
    id: 7,
    owner: "FlexiRide Pvt Ltd",
    brand: "Mitsubishi",
    model: "Montero Sport",
    type: "car",
    image: Montero_Sport,
    year: 2020,
    category: "Premium SUV",
    seat_capacity: 7,
    fuel_type: "Diesel",
    transmission: "Automatic",
    price_per_day: 25000,
    location: "Kandy",
    description: "Powerful SUV perfect for hill country and rough terrains.",
    isAvailable: true,
    withDriverAvailable: false,
    createdAt: "2024-10-20"
  },
  {
    id: 8,
    owner: "FlexiRide Pvt Ltd",
    brand: "Honda",
    model: "Vezel",
    type: "car",
    image: Vezel,
    year: 2021,
    category: "Crossover",
    seat_capacity: 5,
    fuel_type: "Hybrid",
    transmission: "Automatic",
    price_per_day: 18000,
    location: "Galle",
    description: "Fuel-efficient hybrid crossover with stylish design.",
    isAvailable: false,
    withDriverAvailable: true,
    createdAt: "2024-09-10"
  },
  {
    id: 9,
    owner: "FlexiRide Pvt Ltd",
    brand: "Nissan",
    model: "Sunny",
    type: "Car",
    image: Sunny,
    year: 2019,
    category: "Sedan",
    seat_capacity: 5,
    fuel_type: "Petrol",
    transmission: "Manual",
    price_per_day: 10000,
    location: "Negombo",
    description: "Reliable and economical car for everyday use.",
    isAvailable: true,
    withDriverAvailable: false,
    createdAt: "2024-12-05"
  },
  {
    id: 10,
    owner: "FlexiRide Pvt Ltd",
    brand: "Toyota",
    model: "c",
    type: "car",
    image: Land_Cruiser,
    year: 2023,
    category: "Luxury SUV",
    seat_capacity: 8,
    fuel_type: "Diesel",
    transmission: "Automatic",
    price_per_day: 35000,
    location: "Nuwara Eliya",
    description: "Luxury SUV with premium features for comfortable long journeys.",
    isAvailable: true,
    withDriverAvailable: true,
    createdAt: "2024-11-30"
  },
  {
    id: 11,
    owner: "FlexiRide Pvt Ltd",
    brand: "Suzuki",
    model: "Wagon R",
    type: "Car",
    image: Wagon_R,
    year: 2020,
    category: "Hatchback",
    seat_capacity: 5,
    fuel_type: "Petrol",
    transmission: "Automatic",
    price_per_day: 9000,
    location: "Jaffna",
    description: "Compact and spacious hatchback ideal for city driving.",
    isAvailable: true,
    withDriverAvailable: false,
    createdAt: "2024-10-25"
  },
  {
    id: 12,
    owner: "FlexiRide Pvt Ltd",
    brand: "Yamaha",
    model: "YZF R15",
    type: "Bike",
    image: R15,
    year: 2023,
    category: "Sports Bike",
    seat_capacity: 2,
    fuel_type: "Petrol",
    transmission: "Manual",
    price_per_day: 5000,
    location: "Colombo",
    description: "High-performance sports bike for speed enthusiasts.",
    isAvailable: true,
    withDriverAvailable: false,
    createdAt: "2024-12-12"
  },
  {
    id: 13,
    owner: "FlexiRide Pvt Ltd",
    brand: "Mercedes-Benz",
    model: "C-Class",
    type: "Car",
    image: Mercedes_Benz,
    year: 2022,
    category: "Luxury Sedan",
    seat_capacity: 5,
    fuel_type: "Petrol",
    transmission: "Automatic",
    price_per_day: 40000,
    location: "Colombo",
    description: "Premium luxury sedan with advanced technology and comfort.",
    isAvailable: true,
    withDriverAvailable: true,
    createdAt: "2024-11-05"
  },
  {
    id: 14,
    owner: "FlexiRide Pvt Ltd",
    brand: "Toyota",
    model: "Noah",
    type: "Van",
    image: Noah,
    year: 2021,
    category: "Family Van",
    seat_capacity: 8,
    fuel_type: "Petrol",
    transmission: "Automatic",
    price_per_day: 22000,
    location: "Kandy",
    description: "Spacious family van with sliding doors and comfortable seating.",
    isAvailable: false,
    withDriverAvailable: true,
    createdAt: "2024-10-15"
  },
  {
    id: 15,
    owner: "FlexiRide Pvt Ltd",
    brand: "TVS",
    model: "Apache RTR 160",
    type: "Bike",
    image: Apache_RTR,
    year: 2022,
    category: "Street Bike",
    seat_capacity: 2,
    fuel_type: "Petrol",
    transmission: "Manual",
    price_per_day: 3000,
    location: "Galle",
    description: "Sporty street bike with good mileage and performance.",
    isAvailable: true,
    withDriverAvailable: false,
    createdAt: "2024-12-08"
  }

];


export const bookings = [
  {
    bookingId: 101,
    userId: 1,
    vehicleId: 1,
    pickupCity: "Colombo",
    picupDate: "2025-01-10",
    returnDate: "2025-01-12",
    withDriver: true,
    driverFeePerDay: 4000,
    totalAmount: 32000,
    status: "Confirmed"
  },
  {
    bookingId: 102,
    userId: 3,
    vehicleId: 4,
    pickupCity: "Galle",
    picupDate: "2025-01-15",
    returnDate: "2025-01-16",
    withDriver: false,
    driverFeePerDay: 0,
    totalAmount: 3500,
    status: "Pending"
  }
];