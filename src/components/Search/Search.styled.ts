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
`;

export const Input = styled.TextInput`
  padding: 10px;
  flex: 1;
`;

export const ClearButton = styled.TouchableOpacity`
  flex: 0.1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ButtonSearch = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.blueHighlight};
  padding: 12px 24px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
