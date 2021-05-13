import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../../../components/Spacer/Spacer.component";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../../../config/theme/colors";

interface CardProps {
  repo: { id: number; title: string; description: string };
}

const Card = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const RepoTitle = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export default function RepoCard({ repo }: CardProps) {
  const { title, description } = repo;
  return (
    <Card>
      <FontAwesome name="folder" size={42} color={colors.blue} />
      <Spacer horizontal size={16} />
      <View>
        <RepoTitle>{title}</RepoTitle>
        <Text>{description}</Text>
      </View>
    </Card>
  );
}