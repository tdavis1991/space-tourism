import { useState, useEffect } from 'react';

import bg_crew from '../../assets/crew/background-crew-desktop.jpg';
import ansari from '../../assets/crew/image-anousheh-ansari.png';
import hurley from '../../assets/crew/image-douglas-hurley.png';
import shuttleworth from '../../assets/crew/image-mark-shuttleworth.png';
import glover from '../../assets/crew/image-victor-glover.png';

import './crew.css';

import data from '../../data.json';

const Crew = () => {
  const [crew, setCrew] = useState([]);
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(hurley);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    switch (count) {
      case 0:
        setCrew(data.crew[0]);
        setImage(hurley);
        break;
      case 1:
        setCrew(data.crew[1]);
        setImage(shuttleworth);
        break;
      case 2:
        setCrew(data.crew[2]);
        setImage(glover);
        break;
      case 3:
        setCrew(data.crew[3]);
        setImage(ansari);
        break
      default:
        setCrew(data.crew[0]);
        setImage(hurley);
        break;
    }
  }, [count])

  return (
    <div className='crew_container'>
      <img src={bg_crew} alt='crew' className='crew_cover_image' />
      <div className='crew_left_content'>
        <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '28px', marginBottom: '6rem' }}><span style={{ color: '#D0D6F9', fontWeight: 'bold' }}>02</span> Meet your crew</h3>
        <h3 className='crew_role'>{crew.role}</h3>
        <h2 className='crew_name'>{crew.name}</h2>
        <p>{crew.bio}</p>
      </div>
      <div className='crew_right_content'></div>
    </div>
  )
}

export default Crew