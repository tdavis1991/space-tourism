import { Route, Routes } from 'react-router-dom';

import { Home, Destination, Crew, Technology } from './pages';
import Navbar from './components/navbar/Navbar';
import './App.css';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/destination' Component={Destination} />
        <Route path='/crew' Component={Crew} />
        <Route path='/technology' Component={Technology} />
      </Routes>
    </div>
  )
}

export default App
