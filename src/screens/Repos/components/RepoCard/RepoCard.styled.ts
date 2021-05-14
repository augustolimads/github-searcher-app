import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const RepoTitle = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

export const TextBlock = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;
