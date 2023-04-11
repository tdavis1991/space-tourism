import logo from '../../assets/shared/logo.svg';
import './navbar.css'

const navItems = [['00 Home', '/'], ['01 Destination', '/destination'], ['02 Crew', '/crew'], ['03 Technology', '/technology']];

const Navbar = () => {
  return (
    <div className='navbar_container'>
      <img className='navbar_logo' src={logo} alt='logo' />
      <div className='navbar_link_container'>
        {navItems.map((item) => (
          <a key={item[1]} className='navbar_links' href={`${item[1]}`}>{item[0]}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar;