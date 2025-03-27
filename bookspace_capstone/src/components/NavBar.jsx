import React from 'react'
import{Link} from 'react-router-dom'
function NavBar() {
  return (
    <div className='flex'>
         <nav className=''>
          <Link to='/'>Home</Link>
                  <Link to='/explore'>Explore</Link>
                  <Link to='/details'>Details</Link>
                  <Link to='/library'>Library</Link>
                  </nav>
    </div>
  )
}

export default NavBar;


