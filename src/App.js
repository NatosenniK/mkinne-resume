
import Profile from './components/profile'
import Bio from './components/bio';
import Skills from './components/skills'
import Tools from './components/tools'
import Experience from './components/experience';
import Education from './components/education';
import DarkModeToggle from './components/darkModeToggle';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function App() {
  
  return (
    <div className='container my-5'>
      <div className='row'>
      <ResponsiveMasonry columnsCountBreakPoints={{766: 1, 767: 2}}>
          <Masonry columnsCount={2} gutter={30}>
              <Profile></Profile>
              <Bio></Bio>
              <Skills></Skills>
              <Education></Education>
              <Tools></Tools>
              <Experience></Experience>
              
          </Masonry>
        </ResponsiveMasonry>
        <DarkModeToggle />
      
      </div>
    </div>
  );
}

export default App;
