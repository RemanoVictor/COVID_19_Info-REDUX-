import React from "react";
import { Link } from "react-router-dom";

const CountrySpecificCard = (props) => {
  const {
    Country,
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  } = props;
  return (
    <div>
      <h2> Country Name:{Country}</h2>
      <p> New Cases: {NewConfirmed}</p>
      <p> New Deaths: {NewDeaths}</p>
      <p> New Recovered: {NewRecovered}</p>
      <p> Total Cases: {TotalConfirmed}</p>
      <p> Total Deaths: {TotalDeaths}</p>
      <p>Total Recoveries: {TotalRecovered}</p>
    </div>
  );
};

export default CountrySpecificCard;
