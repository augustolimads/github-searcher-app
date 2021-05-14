import React from "react";
import { FlatList } from "react-native";
import { User } from "../../../../@types/User";
import { Flex } from "../../../../components/Flex/Flex.component";
import { Spacer } from "../../../../components/Spacer/Spacer.component";
import { Title } from "../../../../components/Title/Title.component";
import { UserCard } from "../../../../components/UserCard/UserCard.component";

interface UserList {
  users: User[];
}

export default function UserList({ users }: UserList) {
  return (
    <Flex>
      <Title>Usuários encontrados</Title>
      <Spacer vertical size={8} />
      <FlatList
        data={users}
        keyExtractor={(item) => String(item.id)}
        renderItem={(userData) => (
          <Spacer vertical size={8}>
            <UserCard userData={userData.item} />
          </Spacer>
        )}
      />
    </Flex>
  );
}
