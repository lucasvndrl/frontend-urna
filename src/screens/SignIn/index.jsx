import React, { useEffect, useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ButtonText,
  ButtonWrapper,
  CloseButton,
  CloseModal,
  Container,
  Content,
  CPFInput,
  CPFWrapper,
  ErrorContainer,
  ErrorFooterMessage,
  ErrorMessage,
  ErrorModal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Title,
  Wrapper,
  X,
} from "./styles";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TurboModuleRegistry,
  View,
} from "react-native";
import Modal, { ReactNativeModal } from "react-native-modal";
import api from "../../api";

export function SignIn({ navigation }) {
  const [cpf, setCPF] = useState("");
  const [visible, setVisible] = useState(false);

  function ErrorComponent({ visible, children }) {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      toggleModal();
    }, [visible]);

    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setShowModal(false);
      }
    };

    return (
      <ScrollView>
        <Modal transparent visible={showModal}>
          <ErrorContainer>
            <Animated.View
              style={[
                styles.modalError,
                { transform: [{ scale: scaleValue }] },
              ]}
            >
              <CloseButton>
                <CloseModal onPress={() => setVisible(false)}>
                  <X>X</X>
                </CloseModal>
              </CloseButton>
              <ModalHeader>
                <ErrorMessage>Oops!</ErrorMessage>
              </ModalHeader>
              <ModalBody>
                <ErrorMessage>Você já votou anteriormente!</ErrorMessage>
              </ModalBody>
            </Animated.View>
          </ErrorContainer>
        </Modal>
      </ScrollView>
    );
  }

  const postUser = async () => {
    try {
      await api
        .post("/user/save", {
          cpf: cpf,
        })
        .then(() => {
          console.log("Funcionou!");
        });
      navigation.navigate("Urna", {
        cpf,
      });
    } catch (e) {
      console.log(e);
      return setVisible(true);
    }
  };

  return (
    <Container>
      <ErrorComponent visible={visible} />
      <Content>
        <Title>URNA ELETRÔNICA</Title>
        <Wrapper>
          <CPFWrapper>
            <CPFInput
              maxLength={11}
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
  modalError: {
    width: wp("90%"),
    height: hp("40%"),
    backgroundColor: "#fd7979",
    marginTop: hp("20%"),
    paddingRight: wp("15%"),
    paddingLeft: wp("15%"),
    borderRadius: 30,
    elevation: 50,
  },
});
