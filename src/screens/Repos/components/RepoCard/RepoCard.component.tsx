import React from "react";
import { Spacer } from "components/Spacer/Spacer.component";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "theme/colors";
import * as S from "./RepoCard.styled";

interface CardProps {
  repo: { id: number; name: string; description: string };
}

export default function RepoCard({ repo }: CardProps) {
  const { name, description } = repo;
  return (
    <S.Card>
      <FontAwesome name="folder" size={42} color={colors.blue} />
      <Spacer horizontal size={16} />
      <S.TextBlock>
        <S.RepoTitle>{name}</S.RepoTitle>
        <S.Text>{description}</S.Text>
      </S.TextBlock>
    </S.Card>
  );
}
