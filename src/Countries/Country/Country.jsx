import React, { use, useState } from "react";
import Countries from "../Countries";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setvisited] = useState(false);
  console.log(handleVisitedCountries);

  const handleVisited = () => {
    setvisited(visited ? false : true);
    handleVisitedCountries(country);
  };

  return (
    <div
      className={`card ${visited ? "country-visited" : "country-not-visited"}`}
    >
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Name: {country.name.common}</p>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area}</p>
      <p>Capital: {country.capital.capital}</p>
      <p>Region: {country.region.region}</p>
      <button
        className="btn"
        onClick={handleVisited}
        style={{
          backgroundColor: visited ? "green" : "red",
          color: visited ? "white" : "black",
        }}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
