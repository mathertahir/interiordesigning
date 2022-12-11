import React from 'react'
import '../css/componentcss/navbar.css'
import { FiShoppingCart } from "react-icons/fi";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
   <header className='header'>
      <nav className='nav'>
          <div className='logo'>
              <NavLink to='/'> Mather</NavLink>
          </div>
          <ul className="nav-list">
              <li className="nav-link">
              <NavLink to='/'> Home</NavLink>
              </li>
              <li className="nav-link">
              <NavLink to='/login'> Login</NavLink>
              </li>
              <li className="nav-link">
              <NavLink to='/signup'> Signup</NavLink>
              </li>
              <li className="nav-link">
              <NavLink to='/products'> Products</NavLink>
              </li>
              <li className="nav-link"  >
                  <a href=''>
                     <   FiShoppingCart  />
                      <span  className='cart-item'>10</span>
                  </a>
              </li>
              
          </ul>
          
      </nav>
   </header>
    )
  }
  
  export default Navbar