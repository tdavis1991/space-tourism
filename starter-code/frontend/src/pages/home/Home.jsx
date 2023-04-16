import bg_home from '../../assets/home/background-home-desktop.jpg';
import './home.css';

const Home = () => {
  return (
    <div className='home_container'>
      <img src={bg_home} alt='space' className='home_cover_image'/>
      <div className='home_content_container'>
        <div className='home_content_left'> 
          <h5>So, you want to travel to</h5>
          <h1>SPACE</h1>
          <p style={{ textAlign: 'left', fontFamily: 'Barlow, sans-serif' }}>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className='home_explore'>
          <h1>EXPLORE</h1>
        </div>
      </div>
    </div>
  )
}

export default Home