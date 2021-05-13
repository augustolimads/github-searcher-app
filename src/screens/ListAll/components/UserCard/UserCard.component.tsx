import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Spacer from "../../../../components/Spacer/Spacer.component";
import { FontAwesome } from "@expo/vector-icons";

interface CardProps {
  id: number;
  username: string;
  image: string;
}

const Card = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
`;

const Arrow = styled.View`
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

export default function UserCard({ id, username, image }: CardProps) {
  image = "https://avatars.githubusercontent.com/u/31226723?v=4";
  username = "augusto";

  return (
    <Card>
      <Avatar source={{ uri: image }} />
      <Spacer horizontal size={8} />
      <Text>{username}</Text>
      <Spacer flex={1} />
      <Arrow>
        <FontAwesome name="angle-right" size={16} />
      </Arrow>
    </Card>
  );
}
