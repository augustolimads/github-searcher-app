import React from "react";
import { Text, View } from "react-native";
import { Container } from "../../components/Container/Container.component";
import { Search } from "../../components/Search/Search.component";
import Spacer from "../../components/Spacer/Spacer.component";
import { Flex } from "../../components/Flex/Flex.component";
import { EmptyList } from "./components/EmptyList/EmptyList.component";
import UserList from "./components/UserList/UserList.component";

export function ListAllScreen() {
  return (
    <Container>
      <View>
        <Spacer vertical size={20} />
        <Search />
      </View>
      <Flex>
        <Spacer vertical size={20} />
        <UserList />
        {/* <EmptyList /> */}
      </Flex>
    </Container>
  );
}
