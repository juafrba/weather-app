import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const WeatherDetails = ({ humidity, wind }) => {
    return (
        <Grid container justify="center" spacing={2}>
            <Grid item>
                <Typography>Humidity: {humidity}%</Typography>
            </Grid>
            <Grid item>
                <Typography>Wind: {wind}km/h</Typography>
            </Grid>
        </Grid>
    )
};

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
};

export default WeatherDetails;
