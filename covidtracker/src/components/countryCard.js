import React from "react";
import { Link } from "react-router-dom";

const CountryCard = (props) => {
  const { Country, TotalConfirmed, TotalDeaths, TotalRecovered, id } = props;
  return (
    <div>
      <h2> Country Name:{Country}</h2>
      <p> Total Cases: {TotalConfirmed}</p>
      <p> Total Deaths: {TotalDeaths}</p>
      <p>Total Recoveries: {TotalRecovered}</p>
      <Link to={`/CountrySpecificCard/${id}`}> Read More </Link>
    </div>
  );
};

export default CountryCard;
