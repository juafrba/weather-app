import moment from 'moment';
import { toCelsius } from '../utils';

const getForecastItemList = (data) => {
  const days = Array.from({ length: 6 },(v,k)=>k++).map(day => moment().add(day, 'd'));
  const forecastItemListData = days.map((day, index) => {
      const filterFunc = tempItem => moment.unix(tempItem.dt).dayOfYear() === day.dayOfYear();
      const weatherDataByDay = data.list.filter(filterFunc);
      let weatherDataDay;
      switch (index) {
          case 0:
              weatherDataDay = weatherDataByDay[0];
              break;
          case (days.length - 1):
              weatherDataDay = weatherDataByDay[weatherDataByDay.length - 1];
              break;
          default:
              weatherDataDay = weatherDataByDay[Math.round(weatherDataByDay.length / 2)];
              break;
      }

      return {
          hour: moment.unix(weatherDataDay.dt).hour(),
          weekDay: moment.unix(weatherDataDay.dt).format('dddd'),
          state: weatherDataDay.weather[0].main.toLowerCase(),
          temperature: toCelsius(weatherDataDay.main.temp),
      };
  });

  return forecastItemListData;
};

export default getForecastItemList;
