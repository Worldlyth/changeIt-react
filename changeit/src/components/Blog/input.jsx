import React from "react"

export const input = (props) => {
  return (
    <div>
      <label htmlFor="blogTitle" class="content__title">
        Title:
      </label>
      <input
      {...props}
      />
      <label htmlFor="blogText" class="content__title">
        Your story:
      </label>
    </div>
  )
}
