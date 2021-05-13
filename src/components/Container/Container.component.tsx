import React from "react";
import { Platform } from "react-native";
import { Children } from "../../@types/children";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../config/theme/colors";
import * as S from "./Container.styled";

type Props = {
  children?: Children;
  style?: object;
};

export function Container({ children, style, ...rest }: Props) {
  return (
    <S.SafeArea {...rest}>
      <S.Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <>
          <S.Header>
            <FontAwesome name="github" size={140} color={colors.darkGray} />
          </S.Header>
          <S.Card>{children}</S.Card>
        </>
      </S.Keyboard>
    </S.SafeArea>
  );
}
