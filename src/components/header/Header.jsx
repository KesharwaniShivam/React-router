import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className="bg-zinc-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between sticky">
            <Link to="#" className="w-10 hover:scale-1" >
              <img src="https://i.pinimg.com/236x/0f/93/79/0f93798d7dbd239809f07f7b00e9891e.jpg" alt="" />
            </Link>
            <div >
              <ul className='flex space-x-4'>
                <li>
                  <NavLink
                  to="/"
                    className={({ isActive }) =>
                      ` ${isActive ? "text-red-400" : "text-white"} hover:text-red-400`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  to="/about"
                    className={({ isActive }) =>
                      ` ${isActive ? "text-red-400" : "text-white"} hover:text-red-400`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                
                  to="/contact"
                    className={({ isActive }) =>
                      ` ${isActive ? "text-red-400" : "text-white"} hover:text-red-400`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                  to="/github"
                  className={({isActive}) =>
                  ` ${isActive ? 'text-red-400' : 'text-white'} hover:text-red-400`
                  }>
                    Github
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