import { useState } from "react";

const Sidebar = ({ onSearch }) => {
  const [country, setCountry] = useState("");
  const [types, setTypes] = useState([]);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleTypeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTypes([...types, value]);
    } else {
      setTypes(types.filter((type) => type !== value));
    }
  };

  const handleSearchClick = () => {
    onSearch({ country, types });
  };

  return (
    <div className="m-5 bg-white p-5 shadow-lg">
      <h5>Filters</h5>

      <div className="mb-3">
        <label htmlFor="locationName">Search:</label>
        <input
          className="form-input w-full rounded"
          name="locationName"
          id="country"
          value={country}
          onChange={handleCountryChange}
          type="text"
          placeholder="Country, Location.."
          required
        />
      </div>
      <div>
        <h5>Type:</h5>
        <div>
          <label htmlFor="restaurant">
            <input
              className="mr-2"
              type="checkbox"
              id="restaurant"
              value="restaurant"
              checked={types.includes("restaurant")}
              onChange={handleTypeChange}
            />
            Restaurant
          </label>
        </div>
        <div>
          <label htmlFor="museum">
            <input
              className="mr-2"
              type="checkbox"
              id="museum"
              value="museum"
              checked={types.includes("museum")}
              onChange={handleTypeChange}
            />
            Museum
          </label>
        </div>
        <div>
          <label htmlFor="park">
            <input
              className="mr-2"
              type="checkbox"
              id="park"
              value="park"
              checked={types.includes("park")}
              onChange={handleTypeChange}
            />
            Park
          </label>
        </div>
        <div>
          <label htmlFor="bar">
            <input
              className="mr-2"
              type="checkbox"
              id="bar"
              value="bar"
              checked={types.includes("bar")}
              onChange={handleTypeChange}
            />
            Bar
          </label>
        </div>
      </div>

      <button
        className="btn btn-primary mt-4 w-full"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default Sidebar;
