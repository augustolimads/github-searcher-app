import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../@types/User";
import { getFavorites } from "./getFavorites.storage";

export async function deleteFavorite(userData: User) {
  const favorites = await getFavorites();

  const filteredFavorites = favorites.filter(
    ({ id }: User) => id !== userData.id
  );
  AsyncStorage.setItem(
    "@githubSearcher:favorites",
    JSON.stringify(filteredFavorites)
  );
}
