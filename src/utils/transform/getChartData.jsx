import moment from 'moment';
import { toCelsius } from '../utils';

const getChartData = (data) => {
  const days = Array.from({ length: 6 },(v,k)=>k++).map(day => moment().add(day, 'd'));
  const chartData = days.map((day, index) => {
      const filterFunc = tempItem => moment.unix(tempItem.dt).dayOfYear() === day.dayOfYear();
      const weatherDataByDay = data.list.filter(filterFunc);
      const tempsByDay = weatherDataByDay.map(weather => weather.main.temp);
      return {
          dayHour: day.format('ddd'),
          min: toCelsius(Math.min(...tempsByDay)),
          max: toCelsius(Math.max(...tempsByDay)),
      };
  });

  return chartData;
};

export default getChartData;
