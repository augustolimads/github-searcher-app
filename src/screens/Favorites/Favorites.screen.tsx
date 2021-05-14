import React from "react";
import { Container } from "../../components/Container/Container.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { Title } from "../../components/Title/Title.component";
import { UserList } from "./components/UserList/UserList.component";

export function FavoritesScreen() {
  return (
    <Container>
      <Spacer vertical size={20} />
      <Title>Meus Favoritos</Title>
      <UserList />
    </Container>
  );
}
