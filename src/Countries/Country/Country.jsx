import React, { use } from "react";
import Countries from "../Countries";

const Country = ({ country }) => {
  console.log(country);
  return (
    <div className="card ">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Name: {country.name.common}</p>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area}</p>
      <p>Capital: {country.capital.capital}</p>
      <p>Region: {country.region.region}</p>
    </div>
  );
};

export default Country;
