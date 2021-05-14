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

export function ReposScreen() {
  const routes = useRoute();
  const { reposUrl, username } = routes.params;
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const favorited = false;

  const favoriteColor = favorited ? "red" : "gray";

  const favoriteText = !favorited ? `Favoritar ${username} ?` : username;

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

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <Container>
      <S.Header>
        <Title>{favoriteText}</Title>
        <S.FavoriteButton>
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
