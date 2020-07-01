import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Switch from "react-switch";
import "./style.css";

const Toggle = () => {
  const [checkedState, setChecked] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (checked) => {
    setChecked(checked);
    return checked
      ? dispatch({ type: "C_TO_F" })
      : dispatch({ type: "F_TO_C" });
  };

  return (
    <div className="toggle">
      <button>°C</button>
      <Switch
        offHandleColor="#eb6c4c"
        onHandleColor="#eb6c4c"
        onColor="#888"
        height={20}
        handleDiameter={30}
        width={48}
        uncheckedIcon={true}
        checkedIcon={true}
        onChange={(checked) => handleChange(checked)}
        onClick={(checked) => handleChange(checked)}
        checked={checkedState}
        className="switch"
      />
      <button>°F</button>
    </div>
  );
};

export default Toggle;
