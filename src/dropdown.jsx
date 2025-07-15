// CountryCityDropdown.jsx
import { useState } from "react";

const countryCityData = [
  {
    country: "India",
    cities: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
  },
  {
    country: "USA",
    cities: ["New York", "Los Angeles", "Chicago", "Houston"],
  },
  {
    country: "UK",
    cities: ["London", "Manchester", "Liverpool"],
  },
  {
    country: "Japan",
    cities: ["Tokyo", "Osaka", "Kyoto"],
  },
];

const CountryCityDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    const found = countryCityData.find((item) => item.country === country);
    setCities(found ? found.cities : []);
    setSelectedCity("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <label className="block mb-2 font-semibold">Country</label>
      <select
        className="w-full border px-3 py-2 mb-4 rounded"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">-- Select Country --</option>
        {countryCityData.map(({ country }) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <label className="block mb-2 font-semibold">City</label>
      <select
        className="w-full border px-3 py-2 rounded"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        disabled={!cities.length}
      >
        <option value="">-- Select City --</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryCityDropdown;
