import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "../../components/Container/Container.component";
import { Title } from "../../components/Title/Title.component";
import { FontAwesome } from "@expo/vector-icons";
import { Flex } from "../../components/Flex/Flex.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { RepoList } from "./components/RepoList/RepoList.component";
import { useRoute } from "@react-navigation/core";
import axios from "axios";
import { repoRequest } from "../../service/repoRequest.service";
import * as S from "./Repos.styled";
import { colors } from "../../theme/colors";
import { useFavorite } from "../../contexts/FavoriteUser.context";
import { User } from "../../@types/User";

export function ReposScreen() {
  const routes = useRoute();
  const { userData } = routes.params;
  const { loadIsFavorited, isFavorited, handleFavorited } = useFavorite();
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const favoriteColor = isFavorited ? colors.red : colors.background;

  const favoriteText = !isFavorited
    ? `Favoritar ${userData.username} ?`
    : userData.username;

  async function getRepos() {
    setLoading(true);
    let request;
    let result;
    try {
      request = await axios.get(userData.repos);
      result = await repoRequest(request);
      setLoading(false);
      setUserRepos(result);
    } catch (err) {
      setLoading(false);
    } finally {
    }
  }

  useEffect(() => {
    getRepos();
  }, [userData]);

  useEffect(() => {
    loadIsFavorited(userData);
  }, [isFavorited, userData]);

  return (
    <Container>
      <S.Header>
        <Title>{favoriteText}</Title>
        <S.FavoriteButton onPress={() => handleFavorited(userData)}>
          <FontAwesome name="heart" color={favoriteColor} size={24} />
        </S.FavoriteButton>
      </S.Header>
      <Flex>
        <Spacer vertical size={12} />
        {loading ? (
          <ActivityIndicator size="large" color={colors.blueHighlight} />
        ) : (
          <RepoList userRepos={userRepos} />
        )}
      </Flex>
    </Container>
  );
}
