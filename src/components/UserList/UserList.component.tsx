import React from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { User } from "../../@types/User";
import { Flex } from "../Flex/Flex.component";
import { Spacer } from "../Spacer/Spacer.component";
import { Title } from "../Title/Title.component";
import UserCard from "../UserCard/UserCard.component";
import { EmptyList } from "../EmptyList/EmptyList.component";
import { colors } from "../../theme/colors";

interface UserListProps {
  users: User[];
  deleteCard?: any;
  loadingMore?: boolean;
  getMoreUsers?: any;
}

export default function UserList({
  users,
  deleteCard,
  loadingMore,
  getMoreUsers,
}: UserListProps) {
  if (!users || users.length < 1) return <EmptyList />;

  return (
    <Flex>
      {!deleteCard && (
        <>
          <Title>Usuários encontrados</Title>
          <Spacer vertical size={8} />
        </>
      )}
      <FlatList
        data={users}
        keyExtractor={(item) => String(item.id)}
        renderItem={(userData) => (
          <Spacer vertical size={8}>
            <UserCard userData={userData.item} deleteCard={deleteCard} />
          </Spacer>
        )}
        onEndReachedThreshold={0.1}
        onEndReached={({ distanceFromEnd }) =>
          getMoreUsers && getMoreUsers(distanceFromEnd)
        }
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator color={colors.blueHighlight} />
          ) : (
            <></>
          )
        }
      />
    </Flex>
  );
}
