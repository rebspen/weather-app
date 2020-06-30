const initialState = {
  country: "Lisbon",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_LOCATION":
      const celsius = Math.round(action.payload.main.temp - 273.15);
      const fahrenheit = Math.round(celsius * (9 / 5) + 32);
      const unixConvert = (unix) => {
        const date = new Date(unix * 1000);
        let hour =
          date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
        let mins =
          date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
        return mins === 0 ? hour + ":00" : hour + ":" + mins;
      };
      return {
        inCelsius: true,
        country: action.payload.name,
        icon: action.payload.weather[0].icon,
        sunrise: unixConvert(action.payload.sys.sunrise),
        sunset: unixConvert(action.payload.sys.sunset),
        fahrenheit,
        celsius,
      };
      break;
    case "SWITCH":
      return {
        ...state,
        inCelsius: action.payload,
      };
      break;
    case "C_TO_F":
      return {
        ...state,
        inCelsius: false,
      };
      break;
    case "F_TO_C":
      return {
        ...state,
        inCelsius: true,
      };
      break;
    default:
      return state;
  }
}

export default rootReducer;
