import React, { useEffect, useState } from "react";
import { Image, Keyboard } from "react-native";
import { Spacer } from "../Spacer/Spacer.component";
import * as S from "./EmptyList.styled";
import emptyListImg from "../../assets/img/Octocat.png";
import { mediaQuery } from "../../utils/mediaQuery";

interface EmptyListProps {
  text?: string;
}

export function EmptyList({ text }: EmptyListProps) {
  const [keyboardIsShow, setKeyboardIsShow] = useState(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardIsShow(false);
    });

    () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);
  return (
    <S.EmptyListFeedback>
      {!keyboardIsShow && (
        <Image
          source={emptyListImg}
          style={{ height: mediaQuery(0.4), width: mediaQuery(0.4) }}
        />
      )}
      <Spacer vertical size={8} />
      <S.EmptyListText>
        {text ? text : "Está meio vazio por aqui!\nBusque por um usuário"}
      </S.EmptyListText>
    </S.EmptyListFeedback>
  );
}
