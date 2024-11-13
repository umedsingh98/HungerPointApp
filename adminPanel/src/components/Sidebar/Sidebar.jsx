import React from 'react'
import "./sidebar.css";
import { assets } from '../../assets/assets.js';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
         <NavLink to="/add" className="sidebarbtn">
          <img src={assets.add_icon} alt="add-item" />
          <p>Add Item</p>
           </NavLink>
           <NavLink to="/list" className="sidebarbtn">
          <img src={assets.list_icon} alt="add-item" />
          <p>List Item</p>
          </NavLink>
          <NavLink to="/orders" className="sidebarbtn">
          <img src={assets.order_icon} alt="add-item" />
          <p>Orders</p>
          </NavLink>
       </div>
    </div>
  )
}

export default Sidebar