
// src/components/Search.js
import React, { Fragment } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <Fragment>
      <div className='flex items-end space-x-2'>
        <input
          type='text'
          value={''}
          name='search'
          className='p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 border-none'
          placeholder='Search houses and villas'
        />
        <input
          type='date'
          value={''}
          name='check-in'
          className='p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 border-none'
          placeholder='Check In'
        />
        <input
          type='date'
          value={''}
          name='check-out'
          className='p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 border-none'
          placeholder='Check Out'
        />
        <input
          type='text'
          value={''}
          name='add-who'
          className='p-2 border border-gray-300  focus:outline-none focus:border-blue-500 border-none rounded-md'
          placeholder='Add who'
        />
        <button
          type='button'
          className='p-2 bg-blue-700 text-white rounded focus:outline-none border-none'
        >
          <FaSearch className='mr-2' />
        </button>
      </div>
    </Fragment>
  );
};

export default Search;
