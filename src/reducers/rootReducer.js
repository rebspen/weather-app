const initialState = {
  country: "Lisbon",
  inF: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_LOCATION":
      const celsius = Math.round(action.payload.main.temp);
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
        ...state,
        country: action.payload.name,
        icon: action.payload.weather[0].icon,
        sunrise: unixConvert((action.payload.sys.sunrise + action.payload.timezone)),
        sunset: unixConvert((action.payload.sys.sunset + action.payload.timezone)),
        fahrenheit,
        celsius,
      };
      break;
    case "C_TO_F":
      return {
        ...state,
        inF: true,
      };
      break;
    case "F_TO_C":
      return {
        ...state,
        inF: false,
      };
      break;
    default:
      return state;
  }
}

export default rootReducer;
