const appid = "78157462dce36d1bc2d5bc7891e8354c";
export const getWeatherUrl = ({ city, countryCode }) => (
  `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
);
export const getForecastUrl = ({ city, countryCode }) => (
  `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
);
