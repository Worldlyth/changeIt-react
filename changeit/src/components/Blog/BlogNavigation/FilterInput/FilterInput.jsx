import React, {useState} from "react"

const FilterInput = ({getFilterValue , onChange}) => {


  const filterPostsList =(e) => {
    const filterInput = e.currentTarget
    const filterValue = filterInput.value
    getFilterValue(filterValue)
    onChange()
  }


  return (
    <div className="stories__search">
    <div className="sort__title">
      <label htmlFor="filter">search:</label>
      <input
        className="search__input"
        type="search"
        id="filter"
        onChange={filterPostsList}
      />
    </div>   
    </div>
  )
}

export default FilterInput
