import React from 'react';
import './App.css';
import Location from "./components/Location"
import Toggle from "./components/Toggle"
import Weather from "./components/Weather"
import SunriseSunset from "./components/SunriseSunset"

const App = () => {
  return (
    <div className="app">
    <header>
    <h1>Weather app</h1>
    </header>
    <div className="row">
    <Location/>
    <Toggle/>
    </div>
    <Weather/>
    <SunriseSunset/>
    </div>
  );
}

export default App;
