import React from "react"
import "../BlogForm/blogForm.css"

const BlogForm = (props) => {
  return (
    <form className="form__input" id="blogForm" onSubmit={props.addPost}>
      <label htmlFor="blogTitle" className="form__title">
        Title:
      </label>
      <input
        type="text"
        placeholder="Title"
        className="form__text"
        name="title"
        id="title"
      />

      <label htmlFor="blogText" className="form__title">
        Your story:
      </label>
      <textarea
        placeholder="Your story"
        className="form__text"
        rows="10"
        name="text"
        id="text"
      />

      <button type="submit" className="feeback__button bg_blue">
        Tell your story
      </button>
    </form>
  )
}

export default BlogForm
