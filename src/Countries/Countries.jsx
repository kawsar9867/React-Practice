import React, { use, useState } from "react";
import Country from "./Country/Country";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setvisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("handle visited country clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setvisitedCountries(newVisitedCountries);
  };

  const CountriesData = use(countriesPromise);
  const countries = CountriesData.countries;

  return (
    <div>
      <h1>All Countries - {countries.length}</h1>
      <h3>Total Country Visited: {visitedCountries.length}</h3>
      <ol className="text">
        {visitedCountries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>
      <div className="devide">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
