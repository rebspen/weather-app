import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Switch from "react-switch";
import "./style.css";

const Toggle = () => {
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch();
  const useCelsius = useSelector((state) => state.useCelsius);

  const handleChange = (checked) => {
    console.log("checked", checked)
    setChecked(checked)
    dispatch({ type: "SWITCH" });
  };

  return (
    <div className="toggle">
      <button>°C</button>
      <Switch offHandleColor="#eb6c4c" onHandleColor="#eb6c4c" onColor="#888" uncheckedIcon={true} checkedIcon={true} onChange={() => handleChange()} checked={checked} />
      <button>°F</button>
    </div>
  );
};

export default Toggle;
