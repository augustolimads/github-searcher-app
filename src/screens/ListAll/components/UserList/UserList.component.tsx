import React from "react";
import { Text, View } from "react-native";
import { Flex } from "../../../../components/Flex/Flex.component";
import Spacer from "../../../../components/Spacer/Spacer.component";
import UserCard from "../UserCard/UserCard.component";

export default function UserList() {
  return (
    <Flex>
      <Text>Usuários encontrados</Text>
      <Spacer vertical size={8} />
      <UserCard />
      <UserCard />
    </Flex>
  );
}
