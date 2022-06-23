import React, { useState } from "react"
import "../BlogNavigation/blogNavigation.css"
import FilterInput from "./FilterInput/FilterInput"
import SelectSorting from "./SelectSorting/SelectSorting"

const BlogNavigation = ({ posts, sort, getFilterValue, getSortingValue, onChange }) => {
  const [sorting, setSorting] = useState("")

  const sortPostsList = (sorting) => {
    setSorting(sorting)
    const sortedPosts = posts
    if (sorting === "titleUp") {
      sortedPosts.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
    } else if (sorting === "titleDown") {
      sortedPosts.sort((a, b) => {
        if (a.title < b.title) {
          return 1
        }
        if (a.title > b.title) {
          return -1
        }
        return 0
      })
    } else if (sorting === "dateUp") {
      sortedPosts.sort((a, b) => {
        return a.id - b.id
      })
    } else if (sorting === "dateDown") {
      sortedPosts.sort((a, b) => {
        return b.id - a.id
      })
    }
    sort(sortedPosts)
    getSortingValue(sorting)
    onChange()
  }

  return (
    <div className="content__stories-navigation bg_yellow">
      <div className="stories__title">STORIES</div>

      <FilterInput getFilterValue={getFilterValue} onChange={onChange}/>

      <SelectSorting
        options={[
          { value: "date", name: "by date", disabled: true },
          { value: "dateUp", name: "date ↑" },
          { value: "dateDown", name: "date ↓" },
          { value: "title", name: "by title", disabled: true },
          { value: "titleUp", name: "title ↑" },
          { value: "titleDown", name: "title ↓" },
        ]}
        value={sorting}
        onChange={sortPostsList}
      />
    </div>
  )
}

export default BlogNavigation
