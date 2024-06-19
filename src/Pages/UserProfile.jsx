import React from "react";
import avatar from "../Images/author.png";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [Avatar, setAvatar] = useState("");

  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={`/myposts/aaa`} className="btn">
          My posts
        </Link>

        <div className="profile_details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img src={avatar} alt="author profile" />
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
      </div>
    </section>
  );
};

export default UserProfile;
