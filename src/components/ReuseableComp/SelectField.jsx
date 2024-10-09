import React from "react";

const SelectField = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-4 flex flex-col">
      <label className="mb-2 text-gray-700">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
