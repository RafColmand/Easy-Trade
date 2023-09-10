import React from "react";
import './ChartFilter.css'

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`buttonFilter ${
        active
          ? "buttonActive"
          : "noActive"
      }`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;