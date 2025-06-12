import React from 'react';
import './UserCard.css';

function UserCard({ description, avatar }) {
  return (
    <div className="user-card">
      <img className="user-avatar" src={avatar} alt="User Avatar" />
      <p className="user-description">{description}</p>
    </div>
  );
}

export default UserCard;