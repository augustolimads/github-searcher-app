import React from "react";
import styled from "styled-components/native";
import { Children } from "../../@types/Children";

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
  flex: ${({ flex }) => (flex ? flex : "none")};
`;

export function Spacer({ size, horizontal, flex, children }: SpacerProps) {
  const sizeVertical = `${size + "px"} 0`;
  const sizeHorizontal = `0 ${size + "px"}`;
  const margin = horizontal ? sizeHorizontal : sizeVertical;
  return (
    <SpacerStyle marginResult={size ? margin : "0"} flex={flex}>
      {children}
    </SpacerStyle>
  );
}
