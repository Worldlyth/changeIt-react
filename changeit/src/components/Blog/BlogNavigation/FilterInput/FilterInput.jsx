import React from "react"

const FilterInput = () => {
  return (
    
    <div className="stories__search">
    <div className="sort__title">
      <label htmlFor="filter">search:</label>
      <input
        className="search__input"
        type="search"
        placeholder=""
        id="filter"
      />
    </div>   
    </div>
  )
}

export default FilterInput
