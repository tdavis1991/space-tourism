import bg_destination from '../../assets/destination/background-destination-desktop.jpg';
import './destination.css';

const Destination = () => {
  return (
    <div className='destination_container'>
      <img src={bg_destination} alt='space-destination' className='destination_cover_image' />
    </div>
  )
}

export default Destination