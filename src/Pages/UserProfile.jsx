import React from "react";
import avatar from "../Images/author.png";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [Avatar, setAvatar] = useState(avatar);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [newPassword,setNewPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");

  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={`/myposts/aaa`} className="btn_category">
          My posts
        </Link>

        <div className="profile_details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img src={Avatar} alt="author profile" />
            </div>

            {/* ---form to upload avatar---- */}
            <form className="avatar_form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={(e) => setAvatar(e.target.files[0])}
                accept="png,jpg,jpeg"
              />
              <label htmlFor="avatar">
                <FaEdit />
              </label>
            </form>
            <button className="profile_avatar-btn">
              <FaCheck />
            </button>
          </div>
          <h1>Kamal Karki</h1>
        </div>
        <form className="userdata_form">
          <div className="userdata_input">
            <small>This is the error message</small>
            <input type="text" value={name} onClick={e=>setName(e.target.value)} placeholder="Name" />
            <input type="email" value={email} onClick={e=>setEmail(e.target.value)} placeholder="Email" />
            <input type="password"  value={password} onClick={e=>setPassword(e.target.value)} placeholder="password" />
            <input type="password"  value={newPassword} onClick={e=>setNewPassword(e.target.value)} placeholder="new password" />
            <input type="password"  value={confirmPassword} onClick={e=>setConfirmPassword(e.target.value)} placeholder="confirm password" />
          </div>
          <div className="userdata_btn">
            <button className="btn_category">Save</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserProfile;
