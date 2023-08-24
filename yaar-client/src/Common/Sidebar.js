import React, { useState } from 'react';
import "./Sidebar.css"; // Import your CSS file for styling

const Sidebar = (props) => {
  const [selectedItem, setSelectedItem] = useState('Record'); // Initial selected item

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
          onClick={() => setSelectedItem('FinanceRecord')}
        >
          Finance Record
        </li>
        <li
          className={selectedItem === 'Budget' ? 'selected' : ''}
          onClick={() => setSelectedItem('Budget')}
        >
          Budget
        </li>
        <li
          className={selectedItem === 'Categories' ? 'selected' : ''}
          onClick={() => setSelectedItem('Categories')}
        >
          Categories
        </li>
        <li
          className={selectedItem === 'Analysis' ? 'selected' : ''}
          onClick={() => setSelectedItem('Analysis')}
        >
          Analysis
        </li>
        <hr className="m-3" />
        <li
          className={selectedItem === 'TaskRecord' ? 'selected' : ''}
          onClick={() => setSelectedItem('TaskRecord')}
        >
          Task Record
        </li>
        <li
          className={selectedItem === 'Labels' ? 'selected' : ''}
          onClick={() => setSelectedItem('Labels')}
        >
          Labels
        </li>
        <li
          className={selectedItem === 'Progress' ? 'selected' : ''}
          onClick={() => setSelectedItem('Progress')}
        >
          Progress
        </li>
        <hr className="m-3" />
        <li
          className={selectedItem === 'About' ? 'selected' : ''}
          onClick={() => setSelectedItem('About')}
        >
          About Us
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
