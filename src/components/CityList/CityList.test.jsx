import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CityList from './CityList'; //SUT System under testing

const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
    { city: "Valencia", country: "España", countryCode: "ES" },
    { city: "Bogotá", country: "Colombia", countryCode: "CO" },
    { city: "Ciudad de México", country: "México", countryCode: "MX" },
];

test("CityList render", async () => {
    //Arrange
    //Act
    //Assert
    const fnClickOnitem = jest.fn();
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnitem}/>);
    const items = await findAllByRole("button");
    expect(items).toHaveLength(4); 
 });

 test("CityList click on item", async () => {
    const fnClickOnitem = jest.fn();
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnitem} />);
    const items = await findAllByRole("button");
    fireEvent.click(items[0]);
    expect(fnClickOnitem).toHaveBeenCalledTimes(1);
 });
