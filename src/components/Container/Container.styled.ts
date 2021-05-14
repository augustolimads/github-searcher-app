import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const InvisibleButton = styled(TouchableWithoutFeedback)`
  height: 100%;
  width: 100%;
`;

export const Keyboard = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  flex: 0.32;
  justify-content: flex-end;
  align-items: flex-end;
  padding: ${({ theme }) => theme.sizes.s20};
`;

export const Card = styled.View`
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  background-color: white;
  flex: 1;
  padding: 32px;
`;
