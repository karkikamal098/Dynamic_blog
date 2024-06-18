import React from 'react'
import {Link} from "react-router-dom"
import Photo from "../Images/author.png"

const PostAuthor = () => {
  return (
    <Link to={`/posts`}>
      <div className="post_author">
        <img src={Photo} alt="post_author" style={{ width: '25px' }}></img>
      </div>
    </Link>
  )
}

export default PostAuthor