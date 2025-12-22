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

export const vehicles = [
  {
    id: 1,
    owner: "FlexiRide Pvt Ltd",
    brand: "Toyota",
    model: "Prius",
    type: "Car",
    image: "/images/toyota-prius.png",
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
    image: "/images/suzuki-alto.png",
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
    image: "/images/toyota-hiace.png",
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
    image: "/images/bajaj-pulsar.png",
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
    image: "/images/nissan-caravan.png",
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