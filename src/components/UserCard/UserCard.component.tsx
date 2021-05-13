import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { Spacer } from "../Spacer/Spacer.component";
import { colors } from "../../config/theme/colors";
import { User } from "../../@types/User";
import { useNavigation } from "@react-navigation/core";

interface CardProps {
  userData: User;
  deleteCard?: any;
}

const Card = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const Arrow = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
`;

const Avatar = styled.Image`
  border-radius: 8px;
  height: 50px;
  width: 50px;
`;

export function UserCard({ userData, deleteCard }: CardProps) {
  const navigation = useNavigation();

  function handleDelete(id: number) {
    return;
  }

  function viewRepos() {
    navigation.navigate("ListRepos", {
      reposUrl: userData.repos,
      username: userData.username,
    });
  }

  return (
    <Card onPress={viewRepos}>
      <Avatar source={{ uri: userData.avatar }} />
      <Spacer horizontal size={8} />
      <Text>{userData.username}</Text>
      <Spacer flex={1} />
      <Arrow onPress={() => {}}>
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
      </Arrow>
    </Card>
  );
}
