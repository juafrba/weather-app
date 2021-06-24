import axios from 'axios';
import { useState, useEffect } from 'react';

import { getWeatherUrl } from '../utils/urls';
import getAllWeather from '../utils/transform/getAllWeather';
import { getCityCode } from '../utils/utils';

const handleError = (error, setError) => {
  if (error.response) {
      setError('Server Error');
  } else if(error.request) {
      setError("Network Error");
  } else {
      setError("Unexpected Error");
  }
};

const useCityList = (cities, allWeather, onSetAllWeather) => {
//   const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
      const setWeather = async ({ city, countryCode }) => {
          const url = getWeatherUrl({ city, countryCode });
          try {
              onSetAllWeather({ [getCityCode(city, countryCode)]: {} });
              const response = await axios.get(url);
              const allWeatherTurned = getAllWeather(response, city, countryCode);
            //   setAllWeather(allWeather => ({ ...allWeather, ...allWeatherTurned }));
            onSetAllWeather(allWeatherTurned);
          } catch (error) {
              handleError(error, setError);
          };
      };
      cities.filter(({ city, countryCode }) => !allWeather[getCityCode(city, countryCode)])
        .forEach(setWeather);
  }, [cities, allWeather, onSetAllWeather]);

  return { error, setError };
}

export default useCityList;
