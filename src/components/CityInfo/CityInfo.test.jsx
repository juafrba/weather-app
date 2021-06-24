import React from 'react';
import { render } from '@testing-library/react';
import CityInfo from './CityInfo'; //SUT: Subject under testing 
test("CityInfo render", async () => {
    // AAA
    // Arrange
    // Act
    // Assert
    const city = "Valencia";
    const country = "España";
    const { findAllByRole } = render(<CityInfo city={city} country={country} />);
    const cityAndcountryComponent = await findAllByRole("heading");
    expect(cityAndcountryComponent[0]).toHaveTextContent(city);
    expect(cityAndcountryComponent[1]).toHaveTextContent(country);
});
