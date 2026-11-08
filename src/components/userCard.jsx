import React from "react";

const UserCard = ({
  user,
  onDetails,
  isFavorite,
  onToggleFavorite,
}) => {

  return (
    <div className="user-card">

      <div className="user-avatar">
        {user.name.charAt(0)}
      </div>

      <h3>{user.name}</h3>

      <p>📧 {user.email}</p>

      <p>📞 {user.phone}</p>

      <div className="user-actions">

        <button
          className="details-btn"
          onClick={() => onDetails(user)}
        >
          Details
        </button>

        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => onToggleFavorite(user)}
        >
          {isFavorite ? "❤️ Added" : "🤍 Favorite"}
        </button>

      </div>

    </div>
  );
};

export default UserCard;