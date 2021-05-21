import React from "react";
import { Image } from "react-native";
import { Spacer } from "../Spacer/Spacer.component";
import * as S from "./EmptyList.styled";
import emptyListImg from "../../assets/img/Octocat.png";
import { mediaQuery } from "../../utils/mediaQuery";

interface EmptyListProps {
  text?: string;
}

export function EmptyList({ text }: EmptyListProps) {
  return (
    <S.EmptyListFeedback>
      <Image
        source={emptyListImg}
        style={{ height: mediaQuery(0.4), width: mediaQuery(0.4) }}
      />

      <Spacer size={8} />
      <S.EmptyListText>
        {text ? text : "Está meio vazio por aqui!\nBusque por um usuário"}
      </S.EmptyListText>
    </S.EmptyListFeedback>
  );
}
