import { assets } from '../assets/assets';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-black py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
          
          {/* Company Info & Logo */}
          <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <img src={assets.logo} alt="FlexiRide Logo" className="h-10 rounded-full bg-white p-1" />
              <span className="text-white text-xl font-bold">FlexiRide</span>
            </div>
            <div className='w-full max-w-52 h-px mt-8 bg-gradient-to-r from-black via-white/25 to-black'></div>
            <p className='text-sm text-white/60 mt-6 max-w-sm leading-relaxed'>
              FlexiRide offers premium vehicle rentals with flexible options. 
              Choose from cars, bikes, and vans for your perfect journey across Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className='text-sm text-white font-medium'>Quick Links</h3>
            <div className="flex flex-col gap-2 mt-6">
             <Link to="/" className='text-sm text-white/60 hover:text-white transition-colors'>Home</Link>
             <Link to="/vehicles" className='text-sm text-white/60 hover:text-white transition-colors'>Vehicles</Link>
             <Link to="/about-us" className='text-sm text-white/60 hover:text-white transition-colors'>about Us</Link>
             <Link to="/contact" className='text-sm text-white/60 hover:text-white transition-colors'>Contact</Link>
             <Link to="/faq" className='text-sm text-white/60 hover:text-white transition-colors'>FaQ</Link>
            </div>
          </div>

          {/* Vehicle Categories */}
          <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className='text-sm text-white font-medium'>Vehicle Types</h3>
            <div className="flex flex-col gap-2 mt-6">
             <Link to="/vehicles?type=car" className='text-sm text-white/60 hover:text-white transition-colors'>Cars</Link>
             <Link to="/vehicles?type=van" className='text-sm text-white/60 hover:text-white transition-colors'>Vans</Link>
             <Link to="/vehicles?type=bike" className='text-sm text-white/60 hover:text-white transition-colors'>Bikes</Link>
            </div>
          </div>

           <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className='text-sm text-white font-medium'>Social Links</h3>
                <div className="flex flex-col gap-2 mt-6">
                   <Link to="#" className='text-sm text-white/60 hover:text-white transition-colors'>Twitter</Link>
                   <Link to="#" className='text-sm text-white/60 hover:text-white transition-colors'>Instagram</Link>
                   <Link to="#" className='text-sm text-white/60 hover:text-white transition-colors'>Youtube</Link>
                   <Link to="#" className='text-sm text-white/60 hover:text-white transition-colors'>Linkedin</Link>
                </div>
            </div>

        </div>

        <div className='w-full h-px mt-16 mb-4 bg-gradient-to-r from-black via-white/25 to-black'></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className='text-xs text-white/60'>© {new Date().getFullYear()} FlexiRide. all rights reserved.</p>
          <div className="flex items-center gap-6">
           <Link to='/terms' className='text-xs text-white/60 hover:text-white transition-colors'>Terms & Conditions</Link>
            <div className='w-px h-4 bg-white/20'></div>
           <Link to='/privacy' className='text-xs text-white/60 hover:text-white transition-colors'>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;