import React from 'react';
import './App.css';
import NavBar from './NavBar';
import About from './About';

const App = () => (
  <div className="w-full overflow-hidden">
    <div className="flex justify-center items-center md:px-16 px-6">
      <div className="w-full xl:max-w-[1280px]">
        <NavBar />
      </div>
    </div>

    <div className="flex justify-center items-start">
      <div className="w-full xl:max-w-[1280px]">
        <About />
      </div>
    </div>

  </div>
);

export default App;
