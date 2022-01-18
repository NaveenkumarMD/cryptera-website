import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AnimatedCursor from 'react-animated-cursor';
//Components
import Navbar from './Components/Navbar';

//Screens
import Home from './Components/Screens/Home';
import AboutUs from './Components/Screens/AboutUs';
import ContactUs from './Components/Screens/ContactUs';
import WebDevs from './Components/Screens/WebDevs';
import Commitee from './Components/Screens/Commitee';
import Events from './Components/Screens/Events';
import Timeline from './Components/Screens/Timeline';
import Eventdetails from './Components/Screens/Eventdetails';
import Navmobile from './Components/Navmobile';

function App() {
  console.log(window.innerWidth)
  
  return (
    <div className='main-container'>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="36,180,126"
        outerAlpha={0.7}
        innerScale={0.7}
        outerScale={3}
      />
      <BrowserRouter>
      {window.innerWidth >1150 ? <Navbar /> : <Navmobile/>}

        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about_us" element={<AboutUs />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/timeline" element={<Timeline />}></Route>
            <Route path="/web_devs" element={<WebDevs />}></Route>
            <Route path="/commitee" element={<Commitee />}></Route>
            <Route path="/contact_us" element={<ContactUs />}></Route>
            <Route path="/events/:name" element={<Eventdetails  />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
