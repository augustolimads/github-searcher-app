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
import { useFavorite } from "../../contexts/FavoriteUser.context";

export function FavoritesScreen() {
  const { loadFavorites, favorites, isLoading } = useFavorite();

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <Container>
      <Spacer vertical size={20} />
      <Title>Meus Favoritos</Title>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.blueHighlight} />
      ) : (
        <UserList users={favorites} deleteCard />
      )}
    </Container>
  );
}
