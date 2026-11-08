import React from "react";
import UserCard from "./userCard";
import useFavoriteStore from "../store/favouriteStore";

const FavouriteList = ({ onDetails }) => {

  const favoriteUsers = useFavoriteStore(
    (state) => state.favoriteUsers
  );

  const toggleFavorite = useFavoriteStore(
    (state) => state.toggleFavorite
  );

  return (
    <section id="favorites" className="favorites-section">

      <h2>❤️ Favorite Users</h2>

      {favoriteUsers.length === 0 ? (

        <p className="empty-message">
          No favorite users added yet!
        </p>

      ) : (

        <div className="user-grid">

          {favoriteUsers.map((user) => (

            <UserCard
              key={user.id}
              user={user}
              onDetails={onDetails}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />

          ))}

        </div>

      )}

    </section>
  );
};

export default FavouriteList;