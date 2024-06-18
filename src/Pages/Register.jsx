import React, {useState} from 'react'
import { Link } from 'react-router-dom';


const Register = () => {
 const [userData, setUserData] = useState({
   name:'',
   email:'',
   password:''
 })
 
 const changeInput = (e) =>{
   setUserData({
    ...userData,
    [e.target.name]:e.target.value
   })
 };

 


    return(
      <section className="register">
        <div className="register_div">
          <h2>Sign Up</h2>
          <form className='register_form'>
            <p className='form_error'>This is the error message</p>
            <div className='form_input'>
            <input type="text" placeholder="Name" name="name"  value={userData.name} onChange={changeInput} autoFocus />
            <input type="email" placeholder="Email" name="email" value={userData.email} onChange={changeInput} autoFocus />
            <input type="password" placeholder="Password" name="password1" value={userData.password} onChange={changeInput} autoFocus />
            <input type="password" placeholder="confirm Password" name="password1" value={userData.password} onChange={changeInput} autoFocus />
            <button type="submit" className='btn_category'>Register</button>
            </div>
            <small>Already have an account?</small>
           
            <Link to="/login">
          
             Login
             
            </Link>
            
            </form>
          </div>
      </section>
    )
  
}



export default Register