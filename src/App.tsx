import React from 'react';
import './App.css';
import NavBar from './NavBar';

const App = () => (
  <div className="w-full overflow-hidden">
    <div className="flex justify-center items-center sm:px-16 px-6">
      <div className="w-full xl:max-w-[1280px]">
        <NavBar />
      </div>
    </div>

    <h1 className="text-3xl font-bold underline p-3">
      Hello world!
    </h1>

  </div>
);

export default App;
