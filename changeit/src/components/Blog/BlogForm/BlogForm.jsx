import React from "react"
import '../BlogForm/blogForm.css'

export const BlogForm = () => {
  return (
    <form className="content__input" id="blogForm">
      <label htmlFor="blogTitle" className="content__title">
        Title:
      </label>
      <input
        type="text"
        placeholder="Title"
        className="content__text"
        name="title"
        id="blogTitle"
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
      ></textarea>

      <input
        type="submit"
        value="Tell your story"
        className="feeback__button bg_blue"
        id="blogButton"
      ></input>
    </form>
  )
}
