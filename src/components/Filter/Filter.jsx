import React from "react";
import Checkbox from "../common/Checkbox";

const Filter = ({ filter, onChange }) => {
  return (
    <div className="filter-wrapper">
      <h6>Filters:</h6>
      <Checkbox
        label="Men's Clothing"
        name="men"
        disabled={filter.women ? "disabled" : false}
        checked={filter.men}
        onChange={onChange}
      />
      <Checkbox
        label="Women's Clothing"
        name="women"
        disabled={filter.men ? "disabled" : false}
        checked={filter.women}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
