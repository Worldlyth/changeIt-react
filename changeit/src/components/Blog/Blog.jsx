import React from 'react'
import './blog.css'

export const Blog = () => {
  return (
    <div className="blog">
        <div className="blog-title">TELL US YOUR STORY</div>

        <div className="blog-content">

          <form className="content__input" id="blogForm" >
            <label htmlFor="blogTitle" className="content__title">Title:</label>
            <input 
            type="text" 
            placeholder="Title" 
            className="content__text"
            name="title"
            id="blogTitle" />
            <label htmlFor="blogText" className="content__title">Your story:</label>
            <textarea
              placeholder="Your story"
              className="content__text"
              rows="10"
              name="text"
              id="blogText"
            ></textarea>

            <input type="submit" value="Tell your story" className="feeback__button bg_blue" id="blogButton"></input>
          </form>

          <div className="content__stories-navigation bg_yellow">
            <div className="stories__title">STORIES</div>

            <div className="stories__search">
              <div className="sort__title">
                <label htmlFor="filter">search:</label>
                <input className="search__input" type="search" placeholder="" id="filter"></input>
              </div>
 
            </div>

            <div className="stories__sort">
              <div className="sort__title">sort:</div>
              <select id="selectSortingByLetters" className="stories__sort-button">
                <option value="" defaultValue>-</option>
                <option value="AZ">A - Z</option>
                <option value="ZA">Z - A</option>
              </select>

              <select id="selectSortingByDate" className="stories__sort-button">
                <option value="" defaultValue>-</option>
                <option value="dateUp">Date ↑</option>
                <option value="dateDown">Date ↓</option>
              </select>

            </div>
          </div>

          <div className="stories__blog">

          </div>
        </div>
      </div>

  )
}
