import React from "react";

const userDetails = ({ user, onClose }) => {

  if (!user) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="details-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="modal-avatar">
          {user.name.charAt(0)}
        </div>

        <h2>{user.name}</h2>

        <p className="username">@{user.username}</p>

        <div className="details-info">

          <div>
            <strong>Email</strong>
            <p>{user.email}</p>
          </div>

          <div>
            <strong>Phone</strong>
            <p>{user.phone}</p>
          </div>

          <div>
            <strong>Website</strong>
            <p>{user.website}</p>
          </div>

          <div>
            <strong>Address</strong>
            <p>
              {user.address.street}, {user.address.suite},
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>

          <div>
            <strong>Company</strong>
            <p>{user.company.name}</p>
          </div>

        </div>

        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>

      </div>

    </div>
  );
};

export default userDetails;