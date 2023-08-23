import React, { useState } from 'react';
import "./Sidebar.css"; // Import your CSS file for styling

const Sidebar = (props) => {
  const [selectedItem, setSelectedItem] = useState('Record'); // Initial selected item

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={props.className}>
      <div className="profile-picture m-2 flex flex-row justify-center item-start text-sm md:text-lg">
        {/* Placeholder for profile picture */}
        <img className="h-14 m-2 sm:h-16 rounded-full ring-4 ring-offset-[--body_background] ring-offset-4 ring-green-400 " src={props.img} alt="Profile" />
        <h1 className='self-center ml-2'>Welcome {props.name} !!</h1>
      </div>
      <ul className="menu cursor-pointer list-none w-full m-3 text-sm md:text-base">
        {/* <h1 className='p-[10px] text-lg w-full md:mb-2 text-center md:text-3xl'>Finance</h1> */}
        <li
          className={selectedItem === 'FinanceRecord' ? 'selected' : ''}
          onClick={() => handleItemClick('FinanceRecord')}
        >
          Finance Record
        </li>
        <li
          className={selectedItem === 'Budget' ? 'selected' : ''}
          onClick={() => handleItemClick('Budget')}
        >
          Budget
        </li>
        <li
          className={selectedItem === 'Categories' ? 'selected' : ''}
          onClick={() => handleItemClick('Categories')}
        >
          Categories
        </li>
        <li
          className={selectedItem === 'Analysis' ? 'selected' : ''}
          onClick={() => handleItemClick('Analysis')}
        >
          Analysis
        </li>
        <hr className="m-3" />
        <li
          className={selectedItem === 'TaskRecord' ? 'selected' : ''}
          onClick={() => handleItemClick('TaskRecord')}
        >
          Task Record
        </li>
        <li
          className={selectedItem === 'Labels' ? 'selected' : ''}
          onClick={() => handleItemClick('Labels')}
        >
          Labels
        </li>
        <li
          className={selectedItem === 'Progress' ? 'selected' : ''}
          onClick={() => handleItemClick('Progress')}
        >
          Progress
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
