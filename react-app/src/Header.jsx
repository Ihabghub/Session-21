import React, { useEffect, useState } from 'react';
import "./App.css";
import image from "./barber.png";

function Header({ navigate }) { // Accept navigate as a prop
  const [isTransparent, setIsTransparent] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div  className={`flex items-center justify-between py-6 px-24 transition-all duration-300 ease-in-out ${isTransparent ? 'bg-transparent opacity-80' : 'bg-black text-white backdrop-blur-lg'}`}>
      <div>
        <img className='w-20 h-20' src={image} alt="image" />
      </div>
      <ul className='flex gap-4'>
        <li className='text-gray-200 hover:text-blue-400'>SERVICES</li>
        <li className='text-gray-200 hover:text-blue-400'>LOCATIONS</li>
        <li className='text-gray-200 hover:text-blue-400'>ABOUT</li>
        <li className='text-gray-200 hover:text-blue-400'>BLOG</li>
        <li className='text-gray-200 hover:text-blue-400'>CONTACT</li>
        <li className='text-gray-200 hover:text-blue-400'>GIFT CARDS</li>
      </ul>
      <button
        className='bg-yellow-500 text-black font-bold px-4 py-2 rounded'
        onClick={() => navigate('/Reservation')} // Navigate to Reservation page
      >
        BOOK NOW
      </button>
    </div >
  );
}

export default Header;