import React from 'react'
import { useSelector} from "react-redux";

const SunriseSunset = () => {
  const sunrise = useSelector((state)=> state.sunrise)
  const sunset = useSelector((state)=> state.sunset)
  return (
    <div className="row">
      <p>sunrise: {sunrise}</p>
      <p>sunset: {sunset}</p>
    </div>
  )
}

export default SunriseSunset
