
import PostItem from '../Components/Postitem'
import React, { useState } from "react"
import DUMMY_posts from '../data'


  const Posts= () => {
    const [posts,setPosts] = useState(DUMMY_posts);
    return(
        <section className="posts">
            
            {posts.length > 0 ? <div className="container_for_post">
           {
            posts.map(({id,thumbnail,category,title,description,authorId}) =>
            
                <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} title={title} description={description} authorId={authorId} />)  
              }  
            
        </div> : <h2 className=''>No posts found</h2>
          }
            
            </section>
        
    )
  }

 export default Posts

