import { useCountries } from '../../hooks/useCountries.js';
import Countries from '../Countries/Countries';

export default function Main() {
  const { countryFilter, type, setType } = useCountries();
  return (
    <div>
      <div>
        <select
          className="select"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="Antartica">Antartica</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Australia">Australia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
        </select>
      </div>
      {countryFilter().map((name) => (
        <Countries key={name.id} {...name} />
      ))}
    </div>
  );
}
