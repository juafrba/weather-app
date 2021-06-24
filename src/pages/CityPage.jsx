import 'moment/locale/es';
import React, { useMemo } from 'react';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import CityInfo from '../components/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import ForecastChart from '../components/ForecastChart';
import Forecast from '../components/Forecast';
import AppFrame from '../components/AppFrame';
import useCityPage from '../hooks/useCityPage';
import useCityList from '../hooks/useCityList';
import { getCityCode } from '../utils/utils';
import { getCountryNameByCountryCode } from '../utils/serviceCities';

const CityPage = ({ actions, data }) => {
    const { onSetAllWeather, onSetChartData, onSetForecastItemList } = actions;
    const { allWeather, allChartData, allForecastItemList } = data;
    const { city, countryCode } = useCityPage(allChartData, allForecastItemList, onSetChartData, onSetForecastItemList);
    const cities = useMemo(() => [{ city, countryCode }], [city, countryCode]);
    const cityCode = getCityCode(city, countryCode);
    const weather = allWeather[cityCode];
    const chartData = allChartData[cityCode];
    const forecastItemList = allForecastItemList[cityCode];
    const country = getCountryNameByCountryCode(countryCode);
    const state = weather && weather.state;
    const temperature = weather && weather.temperature;
    const humidity = weather && weather.humidity;
    const wind = weather && weather.wind;
    useCityList(cities, allWeather, onSetAllWeather);

    return (
        <AppFrame>
            <Grid container justify="space-around" direction="column" spacing={2}>
                <Grid container item xs={12} justify="center" alignItems="flex-end">
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid container item xs={12} justify="center">
                    <Weather temperature={temperature} state={state} />
                    {
                        humidity && wind
                        && <WeatherDetails humidity={humidity} wind={wind} />
                    }
                </Grid>
                {
                    !chartData && !forecastItemList &&
                        <Grid item xs={12}>
                            <LinearProgress />
                        </Grid>
                }
                <Grid item xs={12}>
                    {
                        chartData && <ForecastChart data={chartData} />
                    }
                </Grid>
                <Grid item xs={12}>
                    {
                        forecastItemList && <Forecast forecastItemList={forecastItemList} />
                    }
                </Grid>
            </Grid>
        </AppFrame>
    )
};

export default CityPage;
