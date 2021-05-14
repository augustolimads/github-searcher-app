import styled from "styled-components/native";

export const EmptyListFeedback = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const EmptyListText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
`;
