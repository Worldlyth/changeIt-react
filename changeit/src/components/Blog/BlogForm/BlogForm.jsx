import React from "react"
import "../BlogForm/blogForm.css"
import { useState } from "react"

export const BlogForm = (setPosts) => {
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
    date: formatDate(),
  })

const [storage, setStorage] = useState([])

  function addNewPost(e) {
    e.preventDefault()
    const newPost = {
      title: post.title,
      text: post.text,
      date: post.date,
    }
    setStorage([...storage,post])
    console.log(storage);
  }

  return (
    <form className="content__input" id="blogForm" onSubmit={addNewPost}>
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
  )
}
