import React from 'react';
import { categoryLinks } from '../../constant/data';
import { BiFilter } from 'react-icons/bi';

const CategoryFilter = () => {
  return (
    <div className="flex items-center space-x-4 mx-2 overflow-x-auto py-2">
      {categoryLinks.map((category, index) => (
        <div key={index} className="cursor-pointer flex flex-col items-center opacity-70 hover:opacity-100 hover:bg-gray-100 rounded-lg p-2">
          <img
            src={category.image}
            alt={`Category ${index + 1}`}
            className="w-8 h-8 object-cover rounded-full transition-transform transform text-red-100 scale-100 hover:scale-110"
          />
          <span className="mt-1 text-xs hover:underline">
            {category.label}
          </span>
        </div>
      ))}

      <div className="cursor-pointer border p-2 rounded-md ml-2 space-x-4 opacity-85 hover:opacity-100 hover:bg-gray-100">
        <BiFilter className="text-gray-800  hover:text-gray-600 transition-colors h-9 w-9 " />
        Filters
      </div>
    </div>
  );
};

export default CategoryFilter;
