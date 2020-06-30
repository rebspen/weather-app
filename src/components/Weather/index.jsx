import React from "react";
import { useSelector } from "react-redux";
import './style.css'

const Weather = () => {
  const temp = useSelector((state) => state.inCelsius);
  const f = useSelector((state) => state.fahrenheit);
  const c = useSelector((state) => state.celsius);
  const icon = useSelector((state) => state.icon);
  return (
    <div className="column">
      {temp ? <span>{c} °C</span> : <span>{f} °F</span>}
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Icon" />
    </div>
  );
};

export default Weather;
