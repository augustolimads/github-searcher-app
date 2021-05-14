import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Spacer } from "../Spacer/Spacer.component";
import { colors } from "theme/colors";
import { User } from "@types/User";
import { useNavigation } from "@react-navigation/core";
import * as S from "./UserCard.styled";
interface CardProps {
  userData: User;
  deleteCard?: any;
}

export function UserCard({ userData, deleteCard }: CardProps) {
  const navigation = useNavigation();

  function handleDelete(id: number) {
    return;
  }

  function viewRepos() {
    navigation.navigate("Repos", {
      reposUrl: userData.repos,
      username: userData.username,
    });
  }

  return (
    <S.Card onPress={viewRepos}>
      <S.Avatar source={{ uri: userData.avatar }} />
      <Spacer horizontal size={8} />
      <S.Text>{userData.username}</S.Text>
      <Spacer flex={1} />
      <S.Arrow onPress={() => {}}>
        {deleteCard ? (
          <FontAwesome
            name="trash"
            size={24}
            color="red"
            onPress={() => handleDelete(userData.id)}
          />
        ) : (
          <FontAwesome name="angle-right" size={16} color={colors.darkGray} />
        )}
      </S.Arrow>
    </S.Card>
  );
}
