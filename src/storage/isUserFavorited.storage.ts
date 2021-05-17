import { User } from "../@types/User";
import { getFavorites } from "./getFavorites.storage";

export const isUserFavorited = async (userData: User) => {
  const favorites = await getFavorites();
  const hasUserData =
    favorites.findIndex(({ id }: User) => id === userData.id) != -1;
  return hasUserData;
};
