import React from 'react';
import Rating from 'react-rating';

const Newsletter = () => {
  return (
    <div className="max-w-5xl py-16 md:pl-20 md:w-full mx-2 md:mx-auto p-4 flex flex-col md:flex-row items-center justify-between text-left bg-gradient-to-b from-[#4C0083] to-[#180047] rounded-2xl md:p-10 text-white mb-10">
      <div>
        <div>
          <p className="text-slate-200">Trusted by 12k+ developers</p>
         <div className="flex items-center">
      <Rating
        initialRating={4.5}
        readonly
        emptySymbol={<span className="text-gray-300 text-xl">★</span>}
        fullSymbol={<span className="text-yellow-400 text-xl">★</span>}
      />
      <span className="text-sm text-slate-300 ml-2">4.5/5 • 2300+ Reviews</span>
    </div>
        </div>
        <h1 className="text-4xl md:text-[46px] max-md:mt-3 text-balance md:leading-[60px] max-w-md font-semibold bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">
          Join our newsletter & Stay Updated
        </h1>
      </div>
      <div className="flex items-center gap-2 bg-violet-900 max-md:mt-6 pl-4 h-11 text-sm rounded-full overflow-hidden">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 5.25L9.75675 9.54525C9.52792 9.67816 9.268 9.74817 9.00337 9.74817C8.73875 9.74817 8.47883 9.67816 8.25 9.54525L1.5 5.25" stroke="#CAD5E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z" stroke="#CAD5E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input 
          type="email" 
          placeholder="Enter your email..." 
          className="outline-none h-11 bg-transparent w-full md:w-auto"
        />
        <button className="px-6 h-10 mr-1 rounded-full border border-violet-600 bg-fuchsia-600 hover:bg-fuchsia-700 transition-colors duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;