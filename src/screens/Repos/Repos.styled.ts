import styled from "styled-components/native";

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FavoriteButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 8px;
  padding-top: 10px;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`;
