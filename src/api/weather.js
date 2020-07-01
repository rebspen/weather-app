import axios from "axios"

export const changeCity = async (country) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=c5ebf85c688c7ad83ee1bb00e7cb8080`);
    return response.data;
  } catch (error) {
    console.log('There was an error');
    throw error;
  }
};