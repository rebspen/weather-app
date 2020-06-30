import React, {useEffect} from "react";
import {changeCity} from "../../api/weather.js"
import { useDispatch } from "react-redux";
import './style.css'

const Location = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  updateLocation("lisbon")
  }, [])

  const updateLocation = async (country) => {
    const response = await changeCity(country);
    console.log("here", response)
    dispatch({type:"NEW_LOCATION", payload: response});
  }

  return (
    <div>
      <select className="select-css" id="countries" name="countries" onChange={(e)=> updateLocation(e.target.value)}>
        <option value="lisbon">Lisbon</option>
        <option value="london">London</option>
        <option value="paris">Paris</option>
        <option value="sydney">Sydney</option>
        <option value="belfast">Belfast</option>
      </select>
    </div>
  );
};

export default Location;
