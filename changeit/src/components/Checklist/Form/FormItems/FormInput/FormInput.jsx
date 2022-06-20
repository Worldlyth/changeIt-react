import React from "react"
import "../FormInput/formInput.css"

export const FormInput = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  className,
  onBlur,
  onFocus,
  error
}) => {


  let errorMessage;

    if (error !== "") {
      errorMessage = `The field must be ${error}`
    }
  

  return (
    <div className="form__item">
      <label htmlFor={id} className="item__label">
        {label}
      </label>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      /> 
    <div className="error-text">{errorMessage}</div>
    </div>
  )
}
