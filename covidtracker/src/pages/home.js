import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CovidData } from "../redux/actions/globalData";

import GlobalDisplay from "../../src/components/globalDisplay";

export default function CovidApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CovidData());
  }, [dispatch]);

  const globalCovidData = useSelector((state) => state.globalData.globalData);
  console.log(globalCovidData);

  return (
    <>
      {globalCovidData !== undefined ? (
        <GlobalDisplay
          Total_Confirmed={globalCovidData.TotalConfirmed}
          recovery_cases={globalCovidData.recovery_cases}
          Total_Deaths={globalCovidData.TotalDeaths}
          currently_infected={globalCovidData.currently_infected}
          death_rate={globalCovidData.general_death_rate}
        />
      ) : (
        <div> LOADING... </div>
      )}
    </>
  );
}
