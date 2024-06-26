import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {Link  } from "react-router-dom";
const category = [
  { name: 'Safety equipments' },
  { name: 'Educational models' },
  { name: 'Water purification system' },
  { name: 'Laboratory equipments' },
  { name: 'Meter and timers' },
  { name: 'Laboratory glassware' },
  { name: 'Laboratory consumable' },
  { name: 'Laboratory chemicals & reagent' },
  { name: 'Office equipments' },
];

const CategoriesDropdown = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="relative py-2 lg:py-0">
      <button
        className="flex items-center focus:outline-none"
        onClick={toggleDropdown}
      >
        Categories {isOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
      </button>
      {isOpen && (
        <ul className="absolute mt-2 bg-gray-400 shadow-lg rounded-lg w-48 z-10">
          {category.map((item, index) => (
            <li
              key={index}
              className="py-2 px-4 hover:bg-gray-700 cursor-pointer"
            >
              <Link to={`/category/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default CategoriesDropdown;
