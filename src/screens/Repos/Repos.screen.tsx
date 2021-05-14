import React, { useState, useEffect } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../../@types/User";
import * as R from "ramda";
import { Alert } from "react-native";

export function ReposScreen() {
  const routes = useRoute();
  const { reposUrl, userData } = routes.params;
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const favorited = false;
  const [userStorage, setUserStorage] = useState([{}]);

  const favoriteColor = favorited ? "red" : "gray";

  const favoriteText = !favorited
    ? `Favoritar ${userData.username} ?`
    : userData.username;

  async function getRepos() {
    setLoading(true);
    let request;
    let result;
    try {
      request = await axios.get(reposUrl);
      result = await repoRequest(request);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    } finally {
      setUserRepos(result);
    }
  }

  async function saveAsyncStorage() {
    try {
      console.log("btn clicado");
      // await AsyncStorage.removeItem("@githubSearcher:favorites"); //Limpar o AsyncStorage
      const data = await AsyncStorage.getItem("@githubSearcher:favorites");
      const favorites = data ? JSON.parse(data) : [];
      if (R.hasIn(userData, favorites)) {
        Alert.alert("usuário já favoritado");
      } else {
        favorites.push(userData);
        AsyncStorage.setItem(
          "@githubSearcher:favorites",
          JSON.stringify(favorites)
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
    }
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <Container>
      <S.Header>
        <Title>{favoriteText}</Title>
        <S.FavoriteButton onPress={saveAsyncStorage}>
          <FontAwesome name="heart" color={favoriteColor} size={24} />
        </S.FavoriteButton>
      </S.Header>
      <Flex>
        <Spacer vertical size={12} />
        <RepoList userRepos={userRepos} />
      </Flex>
    </Container>
  );
}
