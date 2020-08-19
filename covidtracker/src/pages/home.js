import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CovidData } from "../redux/actions/covidData";

import DataDisplay from "../../src/components/dataDisplay";

export default function CovidApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CovidData());
  }, [dispatch]);

  const covidData = useSelector((state) => state.CovidData);

  return (
    <>
      {covidData !== undefined ? (
        <DataDisplay
          total_cases={covidData.total_cases}
          recovery_cases={covidData.recovery_cases}
          death_cases={covidData.death_cases}
          currently_infected={covidData.currently_infected}
          death_rate={covidData.death_rate}
        />
      ) : (
        <div> No data </div>
      )}
    </>
  );
}
