import React from "react";

const Input = ({
  name,
  label,
  labelClass,
  divClass = "form-group",
  type = "text",
  onChange,
  placeholder,
  className = "form-control",
  ...rest
}) => {
  return (
    <div className={divClass}>
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
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
