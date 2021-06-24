import React from 'react';
import PropTypes from 'prop-types';
import { 
    WiDayCloudy,
    WiDaySunny,
    WiDayRain,
    WiDaySnow,
    WiDayRainMix,
    WiDayThunderstorm,
    WiDayFog,
    WiDayHaze,
 } from 'react-icons/wi';

export const validStateValues = [
    "clouds",
    "clear",
    "rain",
    "snow",
    "drizzle",
    "thunderstorm",
    "fog",
    "mist"
];
const stateByName = {
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiDayRain,
    snow: WiDaySnow,
    drizzle: WiDayRainMix,
    thunderstorm: WiDayThunderstorm,
    fog: WiDayFog,
    "mist": WiDayHaze,
};

const IconState = ({ state }) => {
    const StateByName = stateByName[state];
    return (
        <StateByName />
    )
};

IconState.propTypes = {
    state: PropTypes.oneOf(validStateValues).isRequired,
};

export default IconState;
