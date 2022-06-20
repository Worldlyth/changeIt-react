import React from "react"
import '../FormInput/formInput.css'

export const FormInput = ({id, label, type, placeholder, value, onChange}) => {
  return (
    <div className="form__item">
      <label htmlFor={id} className="item__label">
        {label}
      </label>
      <input
       className="item__field"
        type = {type}
        placeholder = {placeholder}
        id = {id}
        name = {id}
        value ={value}
        onChange ={onChange}
      />
    </div>
  )
}
