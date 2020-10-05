import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CovidData } from "../redux/actions/globalData";

import GlobalDisplay from "../../src/components/globalDisplay";

export default function CovidApp(props) {
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
          TotalConfirmed={globalCovidData.TotalConfirmed}
          TotalRecovered={globalCovidData.TotalRecovered}
          TotalDeaths={globalCovidData.TotalDeaths}
          NewConfirmed={globalCovidData.NewConfirmed}
          NewRecovered={globalCovidData.NewRecovered}
          NewDeaths={globalCovidData.NewDeaths}
        />
      ) : (
        <div> LOADING... </div>
      )}
    </>
  );
}
