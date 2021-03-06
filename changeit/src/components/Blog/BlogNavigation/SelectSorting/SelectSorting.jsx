import React from "react"
import '../SelectSorting/selectSorting.css'

const SelectSorting = ({ options, onChange, value }) => {
  return (
    <div className="stories__sort">
      <div className="sort__title">sort:</div>

      <select
        className="stories__sort-button"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option
            disabled={option.disabled}
            key={option.value}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
      <div className="arrow"></div>
    </div>
  )
}

export default SelectSorting
