import './destinationNav.css';

const navItems = ['Moon', 'Mars', 'Europa', 'Titan'];

const DestinationNav = () => {
  return (
    <div>
      {navItems.map((item) => (
        <a href={`/${item.toLowerCase()}`}>{item}</a>
      ))}
    </div>
  )
}

export default DestinationNav;