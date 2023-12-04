import React from 'react';
import Search from './Search';
import { FaUser } from 'react-icons/fa';
import bookmyhomelogo from '../../constant/logo/bookmyhome_logo.png'
const Header = () => {
  return (
    <header className="text-center py-4">
      <div className='flex flex-row items-center justify-between p-2'>
        <div className='md:mb-2 w-32 h-12 mb-4'>
          <img
              src={bookmyhomelogo}
              alt={`bookmyhome logo`}
              className="object-contain rounded-md ml-8 text-red-100 scale-100 hover:scale-110"
            />
        </div>
        <div className='bg-gray-100 p-4 rounded-3xl shadow-lg md:mx-4 text-gray-300'>
          <Search />
        </div>
        <div className='mt-2 md:mt-0'>
          <FaUser className='bg-gray-700 h-12 w-10 mr-8 text-white rounded cursor-pointer' />
        </div>
      </div>
    </header>
  );
}

export default Header;