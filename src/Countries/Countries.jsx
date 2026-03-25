import React, { use } from "react";
import Country from "./Country/Country";

const Countries = ({ countriesPromise }) => {
  const CountriesData = use(countriesPromise);
  const countries = CountriesData.countries;

  return (
    <div>
      <h1>All Countries - {countries.length}</h1>
      <div className="devide">
        {countries.map((country) => (
          <Country country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
