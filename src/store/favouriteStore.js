import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useFavoriteStore = create(
  persist(
    (set) => ({

      // Favorite users state
      favoriteUsers: [],

      // Add favorite user
      addFavorite: (user) =>
        set((state) => ({
          favoriteUsers: [...state.favoriteUsers, user],
        })),

      // Remove favorite user
      removeFavorite: (userId) =>
        set((state) => ({
          favoriteUsers: state.favoriteUsers.filter(
            (user) => user.id !== userId
          ),
        })),

      // Toggle favorite
      toggleFavorite: (user) =>
        set((state) => {
          const isFavorite = state.favoriteUsers.some(
            (item) => item.id === user.id
          );

          if (isFavorite) {
            return {
              favoriteUsers: state.favoriteUsers.filter(
                (item) => item.id !== user.id
              ),
            };
          }

          return {
            favoriteUsers: [...state.favoriteUsers, user],
          };
        }),

    }),

    {
      name: "favorite-users",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFavoriteStore;