import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import ForecastItem from '../ForecastItem';
import { validStateValues } from '../IconState'; 

const renderForecastItem = ({ weekDay, hour, state, temperature }) => {
    return (
        <Grid
            item
            data-testid="forecast-item-container"
            key={`${weekDay}${hour}`}
        >
            <ForecastItem weekDay={weekDay} hour={hour} state={state} temperature={temperature} />
        </Grid>
    );
};

const Forecast = ({ forecastItemList }) => {
    return (
        <Grid 
            container
            justify="space-around"
            alignItems="center"
        >
            {forecastItemList.map(renderForecastItem)}
        </Grid>
    );
};

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validStateValues).isRequired,
        temperature: PropTypes.number.isRequired,
    })).isRequired,
};

export default Forecast;
