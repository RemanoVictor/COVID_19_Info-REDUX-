import React from "react";

const DataDisplay = (props) => {
  const {
    total_cases,
    recovery_cases,
    death_cases,
    currently_infected,
    death_rate,
  } = props;
  return (
    <div>
      <h3> COVID UPDATE </h3>
      <p> Total Cases: {total_cases}</p>
      <p> Total Recoveries: {recovery_cases}</p>
      <p> Total Deaths: {death_cases}</p>
      <p> Current infections: {currently_infected}</p>
      <p> Average Death Rate: {death_rate}</p>
    </div>
  );
};

export default DataDisplay;
