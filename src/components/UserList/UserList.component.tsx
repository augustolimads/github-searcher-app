import React from "react";
import { FlatList } from "react-native";
import { User } from "../../@types/User";
import { Flex } from "../Flex/Flex.component";
import { Spacer } from "../Spacer/Spacer.component";
import { Title } from "../Title/Title.component";
import { UserCard } from "../UserCard/UserCard.component";
import { EmptyList } from "../EmptyList/EmptyList.component";

interface UserList {
  users: User[];
}

export default function UserList({ users }: UserList) {
  if (!users || users.length < 1) return <EmptyList />;

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