import React from "react";
import { Link } from "react-router-dom";

//country card component with boostrap grid placement
const CountryCard = (props) => {
  const {
    Country,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
    CountryCode,
  } = props;
  return (
    <div className="col-md-6 card">
      <div className="card--title">
        <h2>{Country}</h2>
      </div>
      <div className="card--body">
        <p> Total Cases: {TotalConfirmed}</p>
        <p> Total Deaths: {TotalDeaths}</p>
        <p>Total Recoveries: {TotalRecovered}</p>
      </div>
      <div className="card--link">
        <Link to={`/CountrySpecificCard/${CountryCode}`}> Read More </Link>
      </div>
    </div>
  );
};

export default CountryCard;
