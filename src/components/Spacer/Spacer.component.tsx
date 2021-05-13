import React from "react";
import styled from "styled-components/native";
import { Children } from "../../@types/children";

interface SpacerProps {
  size?: number;
  flex?: number;
  horizontal?: boolean;
  vertical?: boolean;
  children?: Children;
  marginResult?: string;
}

const SpacerStyle = styled.View<SpacerProps>`
  margin: ${({ marginResult }) => marginResult};
  flex: ${({ flex }) => (flex ? flex : 0)};
`;

export default function Spacer({
  size,
  horizontal,
  vertical,
  flex,
  children,
}: SpacerProps) {
  const sizeVertical = `${size + "px"} 0`;
  const sizeHorizontal = `0 ${size + "px"}`;
  const margin = vertical ? sizeVertical : sizeHorizontal;
  return (
    <SpacerStyle marginResult={size ? margin : "0"} flex={flex}>
      {children}
    </SpacerStyle>
  );
}
