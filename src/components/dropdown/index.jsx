import React from "react";

const Dropdown = ({ onChange, options, value, required, name }) => {
  return (
    <select
      onChange={onChange}
      value={value || ""}
      required={required}
      className="form-select w-full rounded"
      name={name}
    >
      {<option value="">Select Option</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
