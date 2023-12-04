// src/components/Body.js
import React from 'react';
import CategoryFilter from './CategoryFilter';
import Homes from './Homes';


const Body = () => {
  return (
    <main className="flex-col flex">
        <CategoryFilter />
        <Homes />
    </main>
  );
}

export default Body;

