const BASE_URL = "https://restcountries.com/v3.1";

export async function fetchCountries(search, region) {
  let url = `${BASE_URL}/all`;

  if (search.length >= 2) {
    url = `${BASE_URL}/name/${search}`;
  } else if (region !== "all") {
    url = `${BASE_URL}/region/${region}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
}
