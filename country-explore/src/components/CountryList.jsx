import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  if (countries.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div className="grid">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}

export default CountryList;
