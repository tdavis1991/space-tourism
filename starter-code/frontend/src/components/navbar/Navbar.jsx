import { useState } from 'react';

import logo from '../../assets/shared/logo.svg';
import './navbar.css';

const navItems = [['00 Home', '/', 'home'], ['01 Destination', '/destination', 'destination'], ['02 Crew', '/crew', 'crew'], ['03 Technology', '/technology', 'technology']];

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState('')

  return (
    <div className='navbar_container'>
      <img className='navbar_logo' src={logo} alt='logo' />
      <div className='navbar_line' />
      <div className='navbar_link_container'>
        {navItems.map((item) => (
          <a 
            key={item[2]} 
            className='navbar_links' 
            href={`${item[1]}`} 
            // onClick={setSelectedLink(item[2])} 
            // style={{ borderBottom: selectedLink === item[2] ? '3px solid white' : '' }}
            >
              {item[0]}
            </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar;