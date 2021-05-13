import React from "react";
import { Image } from "react-native";
import { Spacer } from "../../../../components/Spacer/Spacer.component";
import * as S from "./EmptyList.styled";
import emptyListImg from "../../../../assets/img/Octocat.png";

export function EmptyList() {
  return (
    <S.EmptyListFeedback>
      <Image source={emptyListImg} style={{ height: 164, width: 164 }} />
      <Spacer vertical size={8} />
      <S.EmptyListText>
        Está meio vazio por aqui!{"\n"}Busque por um usuário
      </S.EmptyListText>
    </S.EmptyListFeedback>
  );
}
