import React, { use } from "react";
import Countries from "../Countries";

const Country = ({ country }) => {
  console.log(country);
  return (
    <div className="card ">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Name: {country.name.common}</p>
      <p>Population: {country.population.population}</p>
    </div>
  );
};

export default Country;
