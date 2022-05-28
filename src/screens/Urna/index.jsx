import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Text } from "react-native";
import api from "../../api";
import {
  CandidatoField,
  CandidatoTitle,
  Container,
  Content,
  HeaderContent,
  KeyboardField,
  Test,
  VoteField,
  WelcomeMessage,
  WelcomeText,
} from "./styles";

export function Urna({ route }) {
  const { cpf } = route.params;
  const [username, setUserName] = useState("");
  console.log(cpf);
  useEffect(() => {
    try {
      const response = api.get(`/user/list/${cpf}`);

      setUserName(response?.data?.nomeUsuario);
    } catch {
      throw new Error("Deu malote");
    }
  }, []);

  return (
    <Container>
      <Content>
        <HeaderContent>
          <WelcomeMessage>
            <WelcomeText>Olá, {username}!</WelcomeText>
          </WelcomeMessage>
          <Test></Test>
        </HeaderContent>
        <VoteField>
          <CandidatoField>
            <CandidatoTitle>VEREADOR</CandidatoTitle>
          </CandidatoField>
        </VoteField>
        <KeyboardField></KeyboardField>
      </Content>
    </Container>
  );
}
