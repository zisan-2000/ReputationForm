import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 rounded bg-green-500 px-6 py-2 text-white hover:bg-green-600 focus:outline-none"
    >
      {label}
    </button>
  );
};

export default Button;
