import React from 'react'
import './blog.css'

export const Blog = () => {
  return (
    <div class="blog">
        <div class="blog-title">TELL US YOUR STORY</div>

        <div class="blog-content">

          <form class="content__input" id="blogForm" >
            <label for="blogTitle" class="content__title">Title:</label>
            <input 
            type="text" 
            placeholder="Title" 
            class="content__text"
            name="title"
            id="blogTitle" />
            <label for="blogText" class="content__title">Your story:</label>
            <textarea
              placeholder="Your story"
              class="content__text"
              rows="10"
              name="text"
              id="blogText"
            ></textarea>

            <input type="submit" value="Tell your story" class="feeback__button bg_blue" id="blogButton"></input>
          </form>

          <div class="content__stories-navigation bg_yellow">
            <div class="stories__title">STORIES</div>

            <div class="stories__search">
              <div class="sort__title">
                <label for="filter">search:</label>
                <input class="search__input" type="search" placeholder="" id="filter"></input>
              </div>
 
            </div>

            <div class="stories__sort">
              <div class="sort__title">sort:</div>
              <select id="selectSortingByLetters" class="stories__sort-button">
                <option value="" selected>-</option>
                <option value="AZ">A - Z</option>
                <option value="ZA">Z - A</option>
              </select>

              <select id="selectSortingByDate" class="stories__sort-button">
                <option value="" selected>-</option>
                <option value="dateUp">Date ↑</option>
                <option value="dateDown">Date ↓</option>
              </select>

            </div>
          </div>

          <div class="stories__blog">

          </div>
        </div>
      </div>

  )
}
