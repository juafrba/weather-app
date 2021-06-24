import React from 'react';
import { render } from '@testing-library/react';
import WeatherDetails from './WeatherDetails';

test("Weather Details render", async () => {
    //Arrange
    //Act
    //Assert
    const { findByText } = render(<WeatherDetails humidity={10} wind={9} />);
    const humidity = await findByText(/10/);
    const wind = await findByText(/9/);
    expect(humidity).toHaveTextContent("Humidity: 10%");
    expect(wind).toHaveTextContent("Wind: 9km/h");
});
