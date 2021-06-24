import { validStateValues } from '../../components/IconState';
import { getCityCode, toCelsius } from '../utils';

const getAllWeather = (response, city, countryCode) => {
  let { temp: temperature } = response.data.main;
  const { humidity } = response.data.main;
  let { wind } = response.data;
  let { weather: [state] } = response.data;
  wind = wind.speed;
  temperature = toCelsius(temperature);
  state = state.main.toLowerCase();
  state = validStateValues.includes(state) ? state : null;
  const propName = getCityCode(city, countryCode);
  return { [propName]: { temperature, state, humidity, wind }};
};

export default getAllWeather;
