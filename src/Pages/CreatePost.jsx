import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CreatePost= () =>{
  const [title,setTitle] =useState('')
  const [category,setCategory]=useState('Uncategorized')
  const [description,setDescription] = useState('')
  const [thumbnail,setThumbnail] = useState('')

  const modules={
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline','strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const POST_CATEGORIES = ["Agriculture", "Business", "Education", "Entertainment", "Art", "Investment", "Uncategorized","weather"];

  return (
    
    <section className='createpost_section'>
      <h1>Create Post</h1>
      <form className='createpost_form'>
        <small>This is the error message</small>
        <input type="text" placeholder="Title" value={title} onChange={e=> setTitle(e.target.value)} className='createpost_inner_title' autoFocus/>
        <select value={category} onChange={e=>setCategory(e.target.value)}>
             {
              POST_CATEGORIES.map(category => <option key={category}>{category}</option>)
             }
          </select>
        <ReactQuill modules={modules} formats={formats} value={description} onChnage={setDescription} className='createpost_inner_body'/>
        <input type='file' onChange={e=> setThumbnail(e.target.files[0])} accept='png,jpg,jpeg'/>
        <button type="submit">Submit</button>
      </form>
      
     

    </section>
  
  )
}


export default CreatePost