import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className="bg-zinc-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link to="#" className="w-10" >
              <img src="https://i.pinimg.com/236x/0f/93/79/0f93798d7dbd239809f07f7b00e9891e.jpg" alt="" />
            </Link>
            <div >
              <ul className='flex space-x-4'>
                <li>
                  <NavLink
                  to="/"
                    className={({ isActive }) =>
                      `text-white ${isActive ? "text-red-600" : "text-white"}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  to="/about"
                    className={({ isActive }) =>
                      `text-white ${isActive ? "text-red-600" : "text-white"}`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                
                  to="/contact"
                    className={({ isActive }) =>
                      `text-white ${isActive ? "text-red-600" : "text-white"}`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                  to="/service"
                  className={({isActive}) =>
                  `text-white ${isActive ? 'text-red-600' : 'text-white'}`
                  }>
                    Services
                  </NavLink>
                </li>


              </ul>
             
              
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header