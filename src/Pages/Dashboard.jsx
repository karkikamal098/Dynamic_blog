import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DUMMY_posts from '../data'

const Dashboard = () => {
  const [posts, setPosts]= useState(DUMMY_posts);
  return (
    <section>
        <h1 className='dashboard_title'>Dashboard</h1>
        {  posts.length > 0 ? <div className='dashboard'>
          {
           posts.map(post =>  {
             return <article key={post.id} className='dashboard_item'> 
               <img src={post.thumbnail} alt={post.title}/>
               <div className='dashboard_left'>
                 <h3>{post.title}</h3>
                 </div>
                
                 <div className="dashboard_right">
                <Link to={`myposts/{post.id}/view`} className='dashboard_btn dashboard_btn_view'>View</Link>
                <Link to={`myposts/{post.id}/edit`} className='dashboard_btn dashboard_btn_edit'>Edit</Link>
                <Link to={`myposts/{post.id}/delete`} className='dashboard_btn dashboard_btn_delete'>Delete</Link>
                 </div>
               </article>
           }
           )
           }
          </div> : <div>No Posts Available</div>
        } 
      </section>
  )
}

export default Dashboard