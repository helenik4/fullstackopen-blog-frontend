import { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, addLike, deleteById, loggedInUser }) => {
  const [showBlogDetails, setShowBlogDetails] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const hideWhenVisible = { display: showBlogDetails ? 'none' : '' }
  const showWhenVisible = { display: showBlogDetails ? '' : 'none' }

  const addLikeForThisBlog = () => {
    const updatedBlogObject = {
      user: blog.user,
      likes: blog.likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url
    }
    addLike(updatedBlogObject)
  }

  return (
    <div style={blogStyle}>
      <div style={hideWhenVisible}>
        {blog.title} {blog.author}
        <button onClick={() => setShowBlogDetails(true)}>view</button>
      </div>
      <div style={showWhenVisible}>
        <p>{blog.title} {blog.author} <button onClick={() => setShowBlogDetails(false)}>hide</button></p>
        <p>{blog.url}</p>
        <p>likes {blog.likes} <button onClick={() => addLikeForThisBlog()}>like</button></p>
        <p>{blog.user.name}</p>
        {loggedInUser.username === blog.user.username && <button style={{ backgroundColor: 'lightBlue' }} onClick={() => deleteById(blog.id)}>remove</button>}
      </div>
    </div>
  )}

Blog.propTypes = {
  addLike: PropTypes.func.isRequired,
  deleteById: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
  loggedInUser: PropTypes.object.isRequired,
}

export default Blog