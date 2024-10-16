import React,{ useState } from 'react';
import './style.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard';

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (category) => {
    if (category === "all") {
      setMenuData(Menu);
      return;
    }
    
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  }
  return (
    <>
     <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item' onClick={()=>filterItem("all")}>All</button>
        <button className='btn-group__item' onClick={()=>filterItem("breakfast")}>Breakfast</button>
        <button className='btn-group__item' onClick={()=>filterItem("lunch")}>Lunch</button>
        <button className='btn-group__item' onClick={()=>filterItem("dinner")}>Dinner</button>
        <button className='btn-group__item' onClick={()=>filterItem("evening")}>Evening</button>
      </div>
    </nav>
     <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
