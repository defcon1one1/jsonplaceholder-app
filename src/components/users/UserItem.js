import React from "react";
import "./user.css"; // Import the CSS file

const UserItem = ({ id, name, email, onDelete }) => {
  return (
    <div className="list">
      <span>ID: {id}</span>
      <span>Name: {name}</span>
      <span>Email: {email}</span>
    </div>
  );
};

export default UserItem;
