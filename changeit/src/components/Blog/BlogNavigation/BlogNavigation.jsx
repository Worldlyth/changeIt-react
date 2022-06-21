import React from "react"
import "../BlogNavigation/blogNavigation.css"

export const BlogNavigation = () => {
  return (
    <div className="content__stories-navigation bg_yellow">
      <div className="stories__title">STORIES</div>

      <div className="stories__search">
        <div className="sort__title">
          <label htmlFor="filter">search:</label>
          <input
            className="search__input"
            type="search"
            placeholder=""
            id="filter"
          ></input>
        </div>
      </div>

      <div className="stories__sort">
        <div className="sort__title">sort:</div>
        <select id="selectSortingByLetters" className="stories__sort-button">
          <option value="" defaultValue>
            -
          </option>
          <option value="AZ">A - Z</option>
          <option value="ZA">Z - A</option>
        </select>

        <select id="selectSortingByDate" className="stories__sort-button">
          <option value="" defaultValue>
            -
          </option>
          <option value="dateUp">Date ↑</option>
          <option value="dateDown">Date ↓</option>
        </select>
      </div>
    </div>
  )
}
