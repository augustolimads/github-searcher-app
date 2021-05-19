import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const SearchWrapper = styled.View`
  flex-direction: row;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  flex: 1;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 8px;
  align-items: center;
  padding-right: 10px;
`;

export const Input = styled.TextInput`
  padding: 10px;
  flex: 1;
`;

export const ButtonSearch = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.blueHighlight};
  padding: 12px 24px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
