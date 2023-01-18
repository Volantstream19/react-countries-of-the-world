import { useEffect, useState } from 'react';
import { getCountries } from '../services/country.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [type, setType] = useState(['all']);

  useEffect(() => {
    async function fetchData() {
      const data = await getCountries();
      setCountries(data);
    }
    fetchData();
  }, []);

  const countryFilter = () => {
    if (type === 'all') return countries;
    return countries.filter((arr) => arr.continent === type);
  };
  return { countryFilter, type, setType };
}
