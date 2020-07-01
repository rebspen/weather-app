import React from 'react'
import { useSelector} from "react-redux";

const SunriseSunset = () => {
  const sunrise = useSelector((state)=> state.sunrise)
  const sunset = useSelector((state)=> state.sunset)
  
  return (
    <div className="row">
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
    </div>
  )
}

export default SunriseSunset
