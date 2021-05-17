import React from "react";
import { Platform, Keyboard } from "react-native";
import { Children } from "@types/Children";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "theme/colors";
import * as S from "./Container.styled";

type ContainerProps = {
  children?: Children;
  style?: object;
};

export function Container({ children, style, ...rest }: ContainerProps) {
  return (
    <S.InvisibleButton onPress={() => Keyboard.dismiss()}>
      <S.SafeArea {...rest}>
        <S.Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <S.Header>
            <FontAwesome name="github" size={140} color={colors.darkGray} />
          </S.Header>
          <S.Card>{children}</S.Card>
        </S.Keyboard>
      </S.SafeArea>
    </S.InvisibleButton>
  );
}
