import React, {useState} from 'react'
import PostItem from '../Components/Postitem';
import DUMMY_posts from '../data';


    const CategoryPosts = () => {
      const [posts,setPosts] = useState({DUMMY_posts});
      return (
        <section className="post_container">
                
                {posts.length > 0 ? <div className="category_post_container">
               {
                posts.map(({id,thumbnail,category,title,description,authorId}) =>
                
                    <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} title={title} description={description} authorId={authorId} />)  
                  }  
                
            </div> : <h2 className=''>No posts found</h2>
              }
                
                </section>
      )
    }


export default CategoryPosts;




   
 
