import React from "react";

const GlobalDisplay = (props) => {
  const {
    Total_Confirmed,
    recovery_cases,
    Total_Deaths,
    currently_infected,
    death_rate,
  } = props;
  return (
    <div>
      <h3> COVID UPDATE </h3>
      <p>
        Total Confirmed Cases:<b> {Total_Confirmed}</b>
      </p>
      <p>
        Total Recoveries: <b>{recovery_cases}</b>
      </p>
      <p>
        Total Deaths: <b>{Total_Deaths}</b>
      </p>
      <p>
        Current infections: <b>{currently_infected}</b>
      </p>
      <p>
        Average Death Rate: <b>{death_rate}</b>
      </p>
    </div>
  );
};

export default GlobalDisplay;
