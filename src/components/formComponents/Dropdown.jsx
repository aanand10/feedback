import React, { useState } from "react";

const Dropdown = ({ options, setSelectedOption, selectedOption }) => {
  //   const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="relative">
      <select
        onChange={(e) => setSelectedOption(e.target.value)}
        value={selectedOption}
      >
        <option value="" disabled selected>
          Select an option
        </option>
        {options?.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
