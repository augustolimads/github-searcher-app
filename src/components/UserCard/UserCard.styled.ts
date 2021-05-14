import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Arrow = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
`;

export const Avatar = styled.Image`
  border-radius: 8px;
  height: 50px;
  width: 50px;
`;
