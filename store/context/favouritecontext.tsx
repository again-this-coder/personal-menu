import { createContext, useState } from "react";

type ContextProps = {
  ids: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
};

export const FavoriteContext = createContext<ContextProps | null>(null);

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id: number) {
    console.log("added to favorite meal with id:", id);
    setFavoriteMealIds((favoriteIds) => [...favoriteIds, id]);
  }

  function removeFavorite(id: number) {
    console.log("removed meal with id:", id);

    setFavoriteMealIds((favoriteIds) =>
      favoriteIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoritesContextProvider;
