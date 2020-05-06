import React from "react";

const Input = ({
  name,
  label,
  type = "text",
  onChange,
  placeholder,
  className = "form-control",
  ...rest
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        type={type}
        className={className}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
