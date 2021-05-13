import React, { useState, useEffect } from "react";
import { Container } from "../../components/Container/Container.component";
import { Title } from "../../components/Title/Title.component";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import { Flex } from "../../components/Flex/Flex.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { RepoList } from "./components/RepoList/RepoList.component";
import { useRoute } from "@react-navigation/core";
import axios from "axios";
import { repoRequest } from "../../service/repoRequest.service";

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FavoriteButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 8px;
  padding-top: 10px;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`;

export function ListRepos() {
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
      console.log(result);
    }
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{favoriteText}</Title>
        <FavoriteButton>
          <FontAwesome name="heart" color={favoriteColor} size={24} />
        </FavoriteButton>
      </Header>
      <Flex>
        <Spacer vertical size={20} />
        <RepoList userRepos={userRepos} />
      </Flex>
    </Container>
  );
}
