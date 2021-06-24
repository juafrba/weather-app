import React from 'react';
import Forecast from './Forecast';

export default {
    title: "Forecast",
    component: Forecast,
};

const forecastItemList = [
    { weekDay: "Monday", hour:10, state: "clear", temperature: 31 },
    { weekDay: "Tuesday", hour:11, state: "clouds", temperature: 21 },
    { weekDay: "Wednesday", hour:12, state: "rain", temperature: 22 },
    { weekDay: "Thurday", hour:13, state: "clouds", temperature: 14 },
    { weekDay: "Saturday", hour:15, state: "clear", temperature: 9 },
    { weekDay: "Sunday", hour:16, state: "rain", temperature: 26 },
];
export const ForecastExample = () => <Forecast forecastItemList={forecastItemList} />;
