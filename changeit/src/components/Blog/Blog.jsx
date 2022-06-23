import React, { useEffect, useState } from "react"
import "./blog.css"
import BlogForm from "./BlogForm/BlogForm"
import BlogNavigation from "./BlogNavigation/BlogNavigation"
import BlogStories from "./BlogStories/BlogStories"

export const Blog = () => {
  const [searchInput, setSearchInput] = useState ('')
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredsPosts] = useState ([])
  const [sorting, setSorting] = useState('')

  useEffect (()=>{
    let filteredPosts = posts.filter(post => post.title.includes(searchInput))
    setFilteredsPosts(filteredPosts)
  }, [searchInput, posts])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const sortPosts = (sortedPosts) => {
    setPosts([...posts], sortedPosts)
  }

  const getFilterValue = (filter) => {
    setSearchInput(filter)
  }

  const getSortingValue = (sorting) => {
    setSorting(sorting)
  }

const setFilterResult = () => {
  const filterResult = {
    filter: searchInput,
    sorting: sorting, 
    key:filteredPosts.length
  }
  localStorage.setItem(JSON.stringify(filterResult), JSON.stringify(filteredPosts))
}


  return (
    <div className="blog" id="blog">
      <div className="blog-title">TELL US YOUR STORY</div>
      <div className="blog-content">
        <BlogForm create={createPost} />
        <BlogNavigation
          posts={posts}
          sort={sortPosts}
          getFilterValue={getFilterValue}
          getSortingValue={getSortingValue}
          onChange={setFilterResult}
        />
        <BlogStories posts={filteredPosts} />
      </div>
    </div>
  )
}
