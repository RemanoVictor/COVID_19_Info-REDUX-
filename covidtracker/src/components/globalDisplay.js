import React from "react";

const GlobalDisplay = (props) => {
  const {
    TotalConfirmed,
    TotalRecovered,
    TotalDeaths,
    NewConfirmed,
    NewRecovered,
    NewDeaths,
  } = props;
  return (
    <div>
      <h3> COVID UPDATE </h3>
      <p>
        Total Confirmed Cases:<b> {TotalConfirmed}</b>
      </p>
      <p>
        Total Recoveries: <b>{TotalRecovered}</b>
      </p>
      <p>
        Total Deaths: <b>{TotalDeaths}</b>
      </p>
      <p>New Cases: {NewConfirmed}</p>
      <p>New Recovered: {NewRecovered}</p>
      <p> New Deaths: {NewDeaths}</p>
    </div>
  );
};

export default GlobalDisplay;
