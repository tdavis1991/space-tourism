import { useState, useEffect } from 'react';

import moon from '../../assets/destination/image-moon.png';
import mars from '../../assets/destination/image-mars.png';
import europa from '../../assets/destination/image-europa.png';
import titan from '../../assets/destination/image-titan.png';
import bg_destination from '../../assets/destination/background-destination-desktop.jpg';
import './destination.css';

import data from '../../data.json';

const Destination = () => {
  const [destination, setDestination] = useState([]);
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(moon);

  const updateCount = (num) => {
    setCount(num);
  };

  useEffect(() => {
    switch (count) {
      case 0:
        setDestination(data.destinations[0]);
        setImage(moon);
        break;
      case 1:
        setDestination(data.destinations[1]);
        setImage(mars);
        break;
      case 2:
        setDestination(data.destinations[2]);
        setImage(europa);
        break;
      case 3:
        setDestination(data.destinations[3]);
        setImage(titan);
        break
      default:
        setDestination(data.destinations[0]);
        setImage(moon);
        break;
    }
  }, [count])

  return (
    <div className='destination_container'>
      <img src={bg_destination} alt='space-destination' className='destination_cover_image' />
      <div className='destination_left_content'>
        <h3><span style={{ color: '#D0D6F9' }}>01</span> PICK YOUR DESTINATION</h3>
        <img src={image} />
      </div>
      <div className='destination_right_content'>
        <div className='destination_links'>
          <p onClick={() => setCount(0)}>MOON</p>
          <p onClick={() => setCount(1)}>MARS</p>
          <p onClick={() => setCount(2)}>EUROPA</p>
          <p onClick={() => setCount(3)}>TITAN</p>
        </div>
        <h1>{destination.name}</h1>
        <p>{destination.description}</p>
        <div />
        <div>
          <div>
            <p>AVG. DISTANCE</p>
            <p>{destination.distance}</p>
          </div>
          <div>
            <p>EST. TRAVEL TIME</p>
            <p>{destination.travel}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination