import React from "react";

const InputField = ({ label, placeholder, type = "text", value, onChange }) => {
  return (
    <div className="mb-4 flex flex-col">
      <label className="mb-2 text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default InputField;
