import React, { createContext, useContext, useState } from "react";
import { Children } from "../@types/Children";
import { User } from "../@types/User";
import { deleteFavorite } from "../storage/deleteFavorite.storage";
import { getFavorites } from "../storage/getFavorites.storage";
import { isUserFavorited } from "../storage/isUserFavorited.storage";
import { saveFavorite } from "../storage/saveFavorite.storage";

interface FavoriteUserProviderProps {
  children: Children;
}

interface FavoriteUserContextProps {
  loadFavorites: any;
  favorites: User[];
  loadIsFavorited: any;
  isFavorited: boolean;
  isLoading: boolean;
  handleFavorited: any;
}

export const FavoriteUSerContext = createContext({});

export const FavoriteUserProvider = ({
  children,
}: FavoriteUserProviderProps) => {
  const [favorites, setFavorites] = useState<User[]>([]);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function loadFavorites() {
    setFavorites([]);
    setIsLoading(true);
    const storageFavorites = await getFavorites();
    setFavorites(storageFavorites);
    setIsLoading(false);
  }

  async function loadIsFavorited(userData: User) {
    setIsFavorited(false);
    const favorited = await isUserFavorited(userData);
    setIsFavorited(favorited);
  }

  async function handleFavorited(userData: User) {
    setIsFavorited(false);
    const favorited = await isUserFavorited(userData);
    if (favorited) {
      await deleteFavorite(userData);
      setIsFavorited(false);
    } else {
      await saveFavorite(userData);
      setIsFavorited(true);
    }
    await loadFavorites();
  }

  return (
    <FavoriteUSerContext.Provider
      value={{
        loadFavorites,
        favorites,
        loadIsFavorited,
        isFavorited,
        isLoading,
        handleFavorited,
      }}
    >
      {children}
    </FavoriteUSerContext.Provider>
  );
};

export const useFavorite = () => {
  const {
    loadFavorites,
    favorites,
    loadIsFavorited,
    isFavorited,
    isLoading,
    handleFavorited,
  } = useContext(FavoriteUSerContext) as FavoriteUserContextProps;
  return {
    loadFavorites,
    favorites,
    loadIsFavorited,
    isFavorited,
    isLoading,
    handleFavorited,
  };
};
