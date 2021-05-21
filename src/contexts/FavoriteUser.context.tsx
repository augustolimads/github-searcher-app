import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";
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
  handleDeleteFavorite: any;
}

export const FavoriteUSerContext = createContext({});

export const FavoriteUserProvider = ({
  children,
}: FavoriteUserProviderProps) => {
  const [favorites, setFavorites] = useState<User[]>([]);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadFavorites = useCallback(async () => {
    const storageFavorites = await getFavorites();
    setFavorites(storageFavorites);
  }, []);

  async function loadIsFavorited(userData: User) {
    const favorited = await isUserFavorited(userData);
    setIsFavorited(favorited);
  }

  async function handleFavorited(userData: User) {
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

  async function handleDeleteFavorite(userData: User) {
    Alert.alert("Remover", `Deseja remover ${userData.username}?`, [
      { text: "Não 🙏", style: "cancel" },
      {
        text: "Sim 😢",
        onPress: async () => {
          await deleteFavorite(userData);
          setIsFavorited(false);
          await loadFavorites();
        },
      },
    ]);
  }

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  return (
    <FavoriteUSerContext.Provider
      value={{
        favorites,
        loadIsFavorited,
        isFavorited,
        isLoading,
        handleFavorited,
        handleDeleteFavorite,
      }}
    >
      {children}
    </FavoriteUSerContext.Provider>
  );
};

export const useFavorite = () => {
  const {
    favorites,
    loadIsFavorited,
    isFavorited,
    isLoading,
    handleFavorited,
    handleDeleteFavorite,
  } = useContext(FavoriteUSerContext) as FavoriteUserContextProps;
  return {
    favorites,
    loadIsFavorited,
    isFavorited,
    isLoading,
    handleFavorited,
    handleDeleteFavorite,
  };
};
