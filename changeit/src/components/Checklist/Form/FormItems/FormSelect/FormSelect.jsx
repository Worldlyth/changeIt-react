import React from 'react'
import '../FormSelect/formSelect.css'

export const FormSelect = ({id, label, value, onChange}) => {
  return (
    <div className="form__item">
    <label htmlFor={id} className="item__label">
      {label}
    </label>
      <select className="field__select item__field" id={id} value={value} onChange={onChange}>
        <option value={''}>-</option>
        <option value={"marriage"}>Marriage</option>
      </select>
  </div>
  )
}
