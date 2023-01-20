import { useEffect, useState } from 'react';
import { getCountries } from '../services/country.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [type, setType] = useState(['Antartica']);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (e) {
        setError(e.text);
      }
    }
    fetchData();
  }, []);

  const countryFilter = () => {
    if (type === 'all') return countries;
    return countries.filter((arr) => arr.continent === type);
  };
  return { countryFilter, type, setType, error };
}
