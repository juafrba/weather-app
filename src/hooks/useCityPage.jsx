import axios from 'axios';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCityCode } from '../utils/utils';
import { getForecastUrl } from '../utils/urls';
import getChartData from '../utils/transform/getChartData';
import getForecastItemList from '../utils/transform/getForecastItemList';

const useCityPage = (allChartData, allForecastItemList, onSetChartData, onSetForecastItemList) => {
  const { city, countryCode } = useParams();

  const cityCode = getCityCode(city, countryCode);
  useEffect(() => {
    const getForecast = async () => {
      const url = getForecastUrl({ city, countryCode });
      try {
          const { data } = await axios.get(url);
          const chartData = getChartData(data);
          const forecastItemListData = getForecastItemList(data);
          onSetChartData({ [cityCode]: chartData });
          onSetForecastItemList({ [cityCode]: forecastItemListData });
      } catch (error) {
          console.log(error);
      }
    }

    if (allChartData && !allChartData[cityCode] && allForecastItemList && !allForecastItemList[cityCode]) {
      getForecast();
    }
  }, [city, countryCode, onSetChartData, onSetForecastItemList]);

  return { city, countryCode };
};

export default useCityPage;
