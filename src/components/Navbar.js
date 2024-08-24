import React from 'react'
import { NavLink } from 'react-router-dom';
import KitchenIcon from './icons/kitchen.svg';
import Tabs from '../pages/Tabs';
import RecipeLists from '../pages/RecipeLists';

const Navbar = () => {
  return (
       <div className="container">
          <nav className="logo-wrapper">
            <div className="logo">
              <img src={KitchenIcon} alt="Kitchen" className="brand" />
              <span className="text">CookMate</span>
        </div>
          
          </nav>
        </div>
  )
}

export default Navbar
