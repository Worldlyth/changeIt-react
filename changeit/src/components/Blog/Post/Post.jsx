import React from "react"
import "../Post/post.css"

export const Post = (title, text, date) => {
  return (
    <div class="blog__item bg_pink">
      <div class="item__title">
        {title}
        <div class="item__creation-date">{date}</div>
      </div>
      <div class="item__text">{text}</div>
    </div>
  )
}
