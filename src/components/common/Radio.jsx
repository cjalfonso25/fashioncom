import React from "react";

const Radio = ({ label, id, name, className, onChange, ...rest }) => {
  return (
    <div className="custom-control custom-radio">
      <input
        {...rest}
        type="radio"
        id={id}
        name={name}
        className="custom-control-input"
        onChange={onChange}
      />
      <label className="custom-control-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
