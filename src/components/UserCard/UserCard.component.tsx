import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Spacer } from "../Spacer/Spacer.component";
import { colors } from "../../theme/colors";
import { User } from "../../@types/User";
import { useNavigation } from "@react-navigation/core";
import * as S from "./UserCard.styled";
import { useFavorite } from "../../contexts/FavoriteUser.context";

interface CardProps {
  userData: User;
  deleteCard?: any;
}

export function UserCard({ userData, deleteCard }: CardProps) {
  const navigation = useNavigation();
  const { handleDeleteFavorite } = useFavorite();

  function viewRepos() {
    navigation.navigate("Repos", { userData });
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
            color={colors.alert}
            onPress={() => handleDeleteFavorite(userData)}
          />
        ) : (
          <FontAwesome name="angle-right" size={16} color={colors.darkGray} />
        )}
      </S.Arrow>
    </S.Card>
  );
}
