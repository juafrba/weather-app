import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

import IconState, { validStateValues } from '../IconState';

const Weather = ({ temperature, state }) => {
    return (
        <Grid
            container
            item
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}>
            <IconContext.Provider value={{ size: '6em' }}>
                {
                    state ?
                        <IconState state={state} />
                        : <Skeleton variant="circle" height={80} width={80} />
                }
            </IconContext.Provider>
            {
                temperature ?
                    <Typography display="inline" variant="h2">{temperature}</Typography>
                    : <Skeleton variant="rect" height={80} width={80} />
            }
        </Grid>
    );
};

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(validStateValues),
};

export default Weather;
