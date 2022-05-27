import React, { useEffect, useState } from "react";
import {
  ButtonText,
  ButtonWrapper,
  Container,
  Content,
  CPFInput,
  CPFWrapper,
  Title,
  Wrapper,
} from "./styles";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TurboModuleRegistry,
  View,
} from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import axios from "axios";
import { Toast } from "../../components/Toast";
import Modal from "react-native-modal";

const WrapperComponent = () => {
  return (
    <View>
      <Modal isVisible={true}>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
};

export function SignIn({ navigation }) {
  const [cpf, setCPF] = useState("");
  const [loading, setLoading] = useState(false);

  const postUser = async () => {
    try {
      await axios
        .post("https://2c3e-179-54-213-125.ngrok.io/user/save", {
          cpf: cpf,
        })
        .then(() => {});
      navigation.navigate("Urna", {
        cpf,
      });
    } catch {
      return WrapperComponent();
    }
  };

  return (
    <Container>
      <Content>
        <Title>URNA ELETRÔNICA</Title>
        <Wrapper>
          <CPFWrapper>
            <CPFInput
              placeholder="Qual é o seu CPF?"
              placeholderTextColor="#9a9a9a"
              keyboardType="numeric"
              style={styles.input}
              value={cpf}
              onChangeText={(cpf) => setCPF(cpf)}
            />
          </CPFWrapper>
        </Wrapper>
        <ButtonWrapper onPress={() => postUser()}>
          <ButtonText>Ir para votação</ButtonText>
        </ButtonWrapper>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 3,
  },
});
