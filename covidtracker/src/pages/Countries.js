import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CountryCard from "../components/countryCard";
import { CountryData } from "../redux/actions/countryData";

export default function CountriesPage() {
  const dispatch = useDispatch();
  const [filteredCountries, setFilteredCountries] = useState(undefined);
  const [searchPhrase, setsearchPhrase] = useState("");
  const [areCountriesFiltered, setareCountriesFiltered] = useState(false);

  useEffect(() => {
    dispatch(CountryData());
  }, [dispatch]);

  const countryData = useSelector((state) => state.countryData.countryData);
  console.log(countryData);

  function handleFiltering(input) {
    let searchedCountries = countryData.filter((value) => {
      return value.Country.toLowerCase().includes(
        input.target.value.toLowerCase()
      );
    });
    setFilteredCountries(searchedCountries);
    setareCountriesFiltered(true);
    setsearchPhrase(input.target.value);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="search"
          autoComplete="False"
          onChange={handleFiltering}
        />
      </form>

      <div>
        {areCountriesFiltered ? (
          <div>
            {filteredCountries.length > 0 ? (
              filteredCountries.map((value, index) => {
                return (
                  <CountryCard
                    key={index}
                    Country={value.Country}
                    TotalConfirmed={value.TotalConfirmed}
                    TotalDeaths={value.TotalDeaths}
                    TotalRecovered={value.TotalRecovered}
                  />
                );
              })
            ) : (
              <div> No Results </div>
            )}
          </div>
        ) : (
          <div>
            {countryData !== undefined ? (
              countryData.map((value, index) => {
                return (
                  <CountryCard
                    key={index}
                    Country={value.Country}
                    TotalConfirmed={value.TotalConfirmed}
                    TotalDeaths={value.TotalDeaths}
                    TotalRecovered={value.TotalRecovered}
                  />
                );
              })
            ) : (
              <div>no data</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
