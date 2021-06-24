const cities = [
  { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
  { city: "Valencia", country: "España", countryCode: "ES" },
  { city: "Bogotá", country: "Colombia", countryCode: "CO" },
  { city: "Ciudad de México", country: "México", countryCode: "MX" },
];

export const getCities = () => (cities);

export const getCountryNameByCountryCode = (countryCode) => {
  const [city] = cities.filter(city => city.countryCode === countryCode);
  return city.country;
};
