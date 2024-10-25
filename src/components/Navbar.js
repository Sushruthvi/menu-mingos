import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdBorderColor } from "react-icons/md";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <nav className='navbar'>
      <div className='btn-group'>
        {/* Map through the menuList to render each button */}
        {menuList.map((curElem) => {
          return (
            <button
              className='btn-group__item'
              onClick={() => filterItem(curElem)}
              key={curElem} // Add key for unique identifier
            >
              {curElem}
             
            </button>
            
          );
        })}
         <NavLink to="/orders" className='link-to-orders'>
         <MdBorderColor/> Orders
        </NavLink>
       
      </div>
    </nav>
  );
};

export default Navbar;
