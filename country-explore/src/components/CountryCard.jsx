function CountryCard({ country }) {
  return (
    <div className="card">
      <img
        src={country.flags?.png}
        alt={country.name?.common}
        width="100"
      />
      <h3>{country.name?.common}</h3>
      <p>Region: {country.region}</p>
      <p>Population: {country.population?.toLocaleString()}</p>
    </div>
  );
}

export default CountryCard;
