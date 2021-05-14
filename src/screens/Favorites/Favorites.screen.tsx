import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container } from "../../components/Container/Container.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { Title } from "../../components/Title/Title.component";
import { User } from "../../@types/User";
import UserList from "../../components/UserList/UserList.component";
import * as R from "ramda";
import { colors } from "../../theme/colors";
export function FavoritesScreen() {
  const [favorites, setFavorites] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadFavorites() {
    try {
      const data = await AsyncStorage.getItem("@githubSearcher:favorites");
      const dataParse = data ? JSON.parse(data) : [];
      const uniqData = R.uniq(dataParse) as User[];
      setFavorites(uniqData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <Container>
      <Spacer vertical size={20} />
      <Title>Meus Favoritos</Title>
      {loading ? (
        <ActivityIndicator size="large" color={colors.blueHighlight} />
      ) : (
        <UserList users={favorites} />
      )}
    </Container>
  );
}
