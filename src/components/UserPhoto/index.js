import React from "react";
import "./styles.css";
import profile from "../../assets/icons/profile.svg";

const UserPhoto = () => {
  return (
    <div>
      <img src={profile} className="user-photo"></img>
    </div>
  );
};

export default UserPhoto;
