import React from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../config/theme/colors";
import { Spacer } from "../Spacer/Spacer.component";

interface SearchProps {
  value: string;
  setValue: any;
  handleSubmit: any;
}

const SearchWrapper = styled(View)`
  flex-direction: row;
`;

const Input = styled.TextInput`
  padding: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.darkGray};
  flex: 1;
  border-radius: 8px;
`;

const ButtonSearch = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.blueHighlight};
  padding: 12px 24px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export function Search({ value, setValue, handleSubmit }: SearchProps) {
  return (
    <SearchWrapper>
      <Input
        placeholder="Buscar usuário"
        value={value}
        onChangeText={setValue}
      />
      <Spacer size={4} />
      <ButtonSearch onPress={handleSubmit}>
        <FontAwesome name="search" size={28} color={colors.background} />
      </ButtonSearch>
    </SearchWrapper>
  );
}
