import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'



const Postitem = ({postId, category, title, description, authorId,thumbnail}) => {
   return(
    <article className="post">
        <div className="post_thumbnail">
         <img src={thumbnail} alt="post_thumbnail" style={{width:"150px"}}></img>
        </div>
        <div className="post_content">
            <Link to={`/posts/${postId}`}>  
            <h3>{title}</h3>  
            </Link>
            <p>{description}</p>
            <div className="post_footer">
                <PostAuthor/>
                <button className="btn_category">
                <Link to={`/posts/${category}`}>{category}</Link>
                </button>
            </div>
        </div>

    </article>
   )
}
 

export default Postitem