import React, { useState, useCallback, useMemo } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import Mainpage from './pages/MainPage';
import Citypage from './pages/CityPage';
import NotFoundPage from './pages/NotFoundPage';
import { useReducer } from 'react';

const App = () => {
  const initialValue = {

  }; 
  const reducer =() => {};
  const [state, dispatch] = useReducer(reducer, initialValue);
  // const [allWeather, setAllWeather] = useState({});
  // const [allChartData, setAllChartData] = useState({});
  // const [allForecastItemList, setAllForecastItemList] = useState({});
  // const onSetAllWeatherCallback = cityWeather => {
  //   setAllWeather(allWeather => ({ ...allWeather, ...cityWeather }));
  // };
  // const onSetChartDataCallback = chartDataCity => {
  //   setAllChartData(allChartData => ({ ...allChartData, ...chartDataCity }));
  // };
  // const onSetForecastItemListCallback = forecastItemList => {
  //   setAllForecastItemList(allForecastItemList => ({ ...allForecastItemList, ...forecastItemList }));
  // };
  // const onSetAllWeather = useCallback(onSetAllWeatherCallback, [setAllWeather]);
  // const onSetChartData = useCallback(onSetChartDataCallback, [setAllChartData]);
  // const onSetForecastItemList = useCallback(onSetForecastItemListCallback, [setAllForecastItemList]);
  // const actions = useMemo(() => ({
  //   onSetAllWeather,
  //   onSetChartData,
  //   onSetForecastItemList,
  // }), [onSetAllWeather, onSetChartData, onSetForecastItemList]);
  // const data = useMemo(() => ({
  //   allWeather,
  //   allChartData,
  //   allForecastItemList,
  // }), [allWeather, allChartData, allForecastItemList ]);
  // return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/main">
          <Mainpage data={data} actions={dispatch} />
        </Route>
        <Route path="/city/:countryCode/:city">
          <Citypage data={data} actions={dispatch} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;
