import React, { useState, useEffect } from "react";

// Components
import Navbar from "./components/navbar";
import UserCard from "./components/userCard";
import UserDetails from "./components/userDetails";
import FavoriteList from "./components/favouriteList";

// Zustand Store
import useFavoriteStore from "./store/favouriteStore";

// CSS
import "./App.css";

function App() {

  // Store users from API
  const [users, setUsers] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  // Selected user for details
  const [selectedUser, setSelectedUser] = useState(null);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Zustand favorite state
  const favoriteUsers = useFavoriteStore(
    (state) => state.favoriteUsers
  );

  // Favorite toggle function
  const toggleFavorite = useFavoriteStore(
    (state) => state.toggleFavorite
  );


  // Fetch users from API
  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);

      } catch (error) {

        console.log("Error:", error);

        setError("Unable to load users. Please try again.");

      } finally {

        setLoading(false);

      }

    };

    fetchUsers();

  }, []);


  // Search users by name or email
  const filteredUsers = users.filter((user) =>

    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||

    user.email.toLowerCase().includes(searchTerm.toLowerCase())

  );


  return (

    <>

      {/* Navbar */}

      <Navbar
        totalUsers={users.length}
        favoriteCount={favoriteUsers.length}
      />


      <main className="dashboard">


        {/* Hero Section */}

        <div id="dashboard" className="hero-section">

          <h1>Welcome to UserHub 👋</h1>

          <p>
            Manage your users and organize your favorite people.
          </p>

        </div>


        {/* All Users Section */}

        <section id="users" className="users-section">

          <h2>All Users</h2>


          {/* Search Box */}

          <div className="search-box">

            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>


          {/* Loading, Error and Users Display */}

          {loading ? (

            <p className="loading">
              Loading users...
            </p>

          ) : error ? (

            <p className="error-message">
              {error}
            </p>

          ) : filteredUsers.length === 0 ? (

            <p className="empty-message">
              No users found!
            </p>

          ) : (

            <div className="user-grid">

              {filteredUsers.map((user) => {

                const isFavorite = favoriteUsers.some(
                  (item) => item.id === user.id
                );

                return (

                  <UserCard
                    key={user.id}
                    user={user}
                    onDetails={setSelectedUser}
                    isFavorite={isFavorite}
                    onToggleFavorite={toggleFavorite}
                  />

                );

              })}

            </div>

          )}

        </section>


        {/* Favorite Users Section */}

        <FavoriteList
          onDetails={setSelectedUser}
        />


        {/* User Details Modal */}

        <UserDetails
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />


      </main>

    </>

  );

}

export default App;