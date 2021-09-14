import axios from 'axios';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCityCode } from '../utils/utils';
import { getForecastUrl } from '../utils/urls';
import getChartData from '../utils/transform/getChartData';
import getForecastItemList from '../utils/transform/getForecastItemList';

const useCityPage = (allChartData, allForecastItemList, actions) => {
  const { city, countryCode } = useParams();

  useEffect(() => {
    const cityCode = getCityCode(city, countryCode);
    const getForecast = async () => {
      const url = getForecastUrl({ city, countryCode });
      try {
          const { data } = await axios.get(url);
          const chartData = getChartData(data);
          const forecastItemListData = getForecastItemList(data);
          actions({ type: 'SET_CHART_DATA', payload: { [cityCode]: chartData } });
          actions({ type: 'SET_FORECAST_ITEM_LIST', payload: { [cityCode]: forecastItemListData } });
          // onSetChartData({ [cityCode]: chartData });
          // onSetForecastItemList({ [cityCode]: forecastItemListData });
      } catch (error) {
          console.log(error);
      }
    }

    if (allChartData && !allChartData[cityCode] && allForecastItemList && !allForecastItemList[cityCode]) {
      getForecast();
    }
  }, [city, countryCode, actions, allChartData, allForecastItemList]);

  return { city, countryCode };
};

export default useCityPage;
