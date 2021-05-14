import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const SearchWrapper = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  padding: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.darkGray};
  flex: 1;
  border-radius: 8px;
`;

export const ButtonSearch = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.blueHighlight};
  padding: 12px 24px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
