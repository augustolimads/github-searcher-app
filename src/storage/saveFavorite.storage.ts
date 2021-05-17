import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../@types/User";
import { getFavorites } from "./getFavorites.storage";
import { isUserFavorited } from "./isUserFavorited.storage";

export async function saveFavorite(userData: User) {
  try {
    const favorites = await getFavorites();
    const favorited = await isUserFavorited(userData);

    if (!favorited) {
      favorites.push(userData);
      AsyncStorage.setItem(
        "@githubSearcher:favorites",
        JSON.stringify(favorites)
      );
    }
  } catch (err) {
    console.error(err);
  }
}
