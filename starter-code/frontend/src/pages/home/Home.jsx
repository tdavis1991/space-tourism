import bg_home from '../../assets/home/background-home-desktop.jpg';
import './home.css';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg_home})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%'
      }}
      className='home_container'
    >
      <div className='home_content_container'>
        <div className='home_content_left'> 
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p>
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