import React from "react";
import { Image } from "react-native";
import {
  BoxImageCandidato,
  CandidatoWrapper,
  NomePartido,
  NomePartidoWrapper,
} from "../styles";

export function CandidatoInfo({ info }) {
  return (
    <CandidatoWrapper>
      <NomePartidoWrapper>
        <NomePartido>Nome: {info.nome}</NomePartido>
        <NomePartido>Partido: {info.partido}</NomePartido>
      </NomePartidoWrapper>
      <BoxImageCandidato>
        <Image
          style={{ width: 125, height: 125, borderRadius: 20 }}
          source={info.image}
        />
      </BoxImageCandidato>
    </CandidatoWrapper>
  );
}
