import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import axios from "axios";

import { GLOBAL_API } from "../constant";
import CountryCardSpecific from "../components/countrySpecific";
// import { CountryData } from "../redux/actions/countryData";

export default function CountrySpecific() {
  const [countryData, setcountryData] = useState(undefined);
  //   const dispatch = useDispatch();
  let { CountryCode } = useParams();

  //   useEffect(() => {
  //     dispatch(CountryData());
  //   }, [dispatch]);

  useEffect(() => {
    axios.get(GLOBAL_API).then((countryResults) => {
      setcountryData(countryResults.data.Countries);
    });
  }, [CountryCode]);
  console.log(countryData);

  //   const countryData = useSelector((state) => state.countryData.countryData);
  //   console.log(countryData);

  return (
    <div>
      <div className="row">
        <div className="col-sm-4"></div>
        {countryData !== undefined ? (
          <CountryCardSpecific
            CountryCode={countryData.CountryCode}
            NewConfirmed={countryData.NewConfirmed}
            TotalConfirmed={countryData.TotalConfirmed}
            NewDeaths={countryData.NewDeaths}
            TotalDeaths={countryData.TotalDeaths}
            NewRecovered={countryData.NewRecovered}
            TotalRecovered={countryData.TotalRecovered}
          />
        ) : (
          <div> No data </div>
        )}
      </div>
    </div>
  );
}
