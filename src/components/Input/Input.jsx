import React from "react";

const Input = ({ label, id, placeholder, disabled, value }) => {
  return (
    <div className="w-full">
      <label htmlFor={id}>{label}:</label>
      <br />
      <input
        type="text"
        className="border px-3 py-2 w-full disabled:border-none disabled:bg-slate-100 disabled:cursor-not-allowed focus:outline-none"
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
      />
    </div>
  );
};

export default Input;
