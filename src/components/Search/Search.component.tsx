import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../theme/colors";
import { Spacer } from "../../components/Spacer/Spacer.component";
import * as S from "./Search.styled";

interface SearchProps {
  value: string;
  setValue: any;
  handleSubmit: any;
}

export function Search({ value, setValue, handleSubmit }: SearchProps) {
  return (
    <S.SearchWrapper>
      <S.Input
        placeholder="Buscar usuário"
        value={value}
        onChangeText={setValue}
      />
      <Spacer size={4} />
      <S.ButtonSearch onPress={handleSubmit}>
        <FontAwesome name="search" size={28} color={colors.background} />
      </S.ButtonSearch>
    </S.SearchWrapper>
  );
}
