import "./App.css";

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import CountryList from "./components/CountryList";
import Loading from "./components/Loading";
import Error from "./components/Error";
import { fetchCountries } from "./services/api";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchCountries(search, region)
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load countries");
        setLoading(false);
      });
  }, [search, region]);

  return (
    <div className="app">
      <SearchBar search={search} setSearch={setSearch} />
      <RegionFilter region={region} setRegion={setRegion} />

      {loading && <Loading />}
      {error && <Error message={error} onRetry={() => setRegion(region)} />}

      {!loading && !error && (
        <CountryList countries={countries} />
      )}
    </div>
  );
}

export default App;
