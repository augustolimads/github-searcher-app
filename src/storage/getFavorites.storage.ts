import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFavorites = async () => {
  // await AsyncStorage.removeItem("@githubSearcher:favorites"); //Limpar o AsyncStorage
  const data = await AsyncStorage.getItem("@githubSearcher:favorites");
  const favorites = data ? JSON.parse(data) : [];
  return favorites;
};
