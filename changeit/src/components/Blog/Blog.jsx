import React from "react"
import "./blog.css"
import { useState } from "react"

export const Blog = () => {
  function formatDate() {
    const date = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    }

    for (let key in date) {
      if (date[key] < 10) date[key] = `0${date[key]}`
    }

    return `${date.year}-${date.month}-${date.day} ${date.hours}:${date.minutes}`
  }



  const [post, setPost] = useState({
    title: "",
    text: "",
  })

const [storage, setStorage] = useState([])


function addPost (e) {
  const newPost = {
    title: post.title,
    text: post.text,
    date: formatDate(),
    id: Date.parse(new Date().getMilliseconds())
  } 
  e.preventDefault()
  setStorage([...storage, newPost])
  console.log(storage);
  setPost({...post, title: '', text: ''})
} 


  return (
    <div className="blog">
      <div className="blog-title">TELL US YOUR STORY</div>

      <div className="blog-content">
        <form className="content__input" id="blogForm" onSubmit={addPost}>
          <label htmlFor="blogTitle" className="content__title">
            Title:
          </label>
          <input
            type="text"
            placeholder="Title"
            className="content__text"
            name="title"
            id="blogTitle"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            value={post.title}
          />

          <label htmlFor="blogText" className="content__title">
            Your story:
          </label>
          <textarea
            placeholder="Your story"
            className="content__text"
            rows="10"
            name="text"
            id="blogText"
            onChange={(e) => setPost({ ...post, text: e.target.value })}
            value={post.text}
          ></textarea>

          <input
            type="submit"
            value="Tell your story"
            className="feeback__button bg_blue"
            id="blogButton"
          ></input>
        </form>

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
            <select
              id="selectSortingByLetters"
              className="stories__sort-button"
            >
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

        <div className="stories__blog">
          {storage.map((post)=>
             <div className="blog__item bg_pink" key={post.id}>
            <div className="item__title">
            {post.title}
              <div className="item__creation-date">{post.date}</div>
            </div>
            <div className="item__text">{post.text}</div>
          </div> 
          )}
        </div>
      </div>
    </div>
  )
}



