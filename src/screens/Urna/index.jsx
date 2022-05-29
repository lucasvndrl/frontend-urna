import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import api from "../../api";
import {
  BoxImageCandidato,
  CandidatoField,
  CandidatoTitle,
  CandidatoWrapper,
  CodigoInput,
  Container,
  Content,
  HeaderContent,
  InputVoto,
  ButtonField,
  NomePartido,
  NomePartidoWrapper,
  IconWrapper,
  VoteField,
  VotoWrapper,
  WelcomeMessage,
  WelcomeText,
  VotoBranco,
  Corrige,
  Confirma,
  ButtonText,
  ErrorContainer,
  CloseButton,
  CloseModal,
  ModalHeader,
  ErrorMessage,
  ModalBody,
  X,
  InfoField,
  InfoText,
  InfoPhoto,
  InfoTextWrapper,
} from "./styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export function Urna({ route }) {
  // const { cpf } = route.params;
  const [username, setUserName] = useState("");
  const [codigoCandidato, setCodigoCandidato] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const response = async () => {
        await api.get(`/user/list/${cpf}`);

        setUserName(response?.data?.nomeUsuario);
      };
    } catch {
      throw new Error("Deu malote");
    }
  }, []);

  function ModalInfo({ visible, children }) {
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
      <Modal transparent visible={showModal}>
        <ErrorContainer>
          <ScrollView>
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
                <ErrorMessage>
                  Selecione um partido abaixo, para visualização dos candidatos
                </ErrorMessage>
              </ModalHeader>
              <ModalBody>
                <InfoField>
                  <InfoTextWrapper>
                    <InfoText>Prefeito Testosterona</InfoText>
                    <InfoText>12</InfoText>
                    <InfoText>Partido de Bruno</InfoText>
                  </InfoTextWrapper>
                  <InfoPhoto>
                    <Image
                      style={{ width: 82, height: 82, borderRadius: 30 }}
                      source={require("../../assets/bruno.jpeg")}
                    />
                  </InfoPhoto>
                </InfoField>
                <InfoField>
                  <InfoTextWrapper>
                    <InfoText>Renato Loureiro</InfoText>
                    <InfoText>44</InfoText>
                    <InfoText>Partido dos fortes</InfoText>
                  </InfoTextWrapper>
                  <InfoPhoto>
                    <Image
                      style={{ width: 82, height: 82, borderRadius: 30 }}
                      source={require("../../assets/renato.jpg")}
                    />
                  </InfoPhoto>
                </InfoField>
                <InfoField>
                  <InfoTextWrapper>
                    <InfoText>Max Verstappen</InfoText>
                    <InfoText>33</InfoText>
                    <InfoText>Partido dos rápidos</InfoText>
                  </InfoTextWrapper>
                  <InfoPhoto>
                    <Image
                      style={{ width: 82, height: 82, borderRadius: 30 }}
                      source={require("../../assets/max.jpg")}
                    />
                  </InfoPhoto>
                </InfoField>
                <InfoField>
                  <InfoTextWrapper>
                    <InfoText>Victor Neves</InfoText>
                    <InfoText>66</InfoText>
                    <InfoText>Partido dos cabeludos</InfoText>
                  </InfoTextWrapper>
                  <InfoPhoto>
                    <Image
                      style={{ width: 82, height: 82, borderRadius: 30 }}
                      source={require("../../assets/victor.jpeg")}
                    />
                  </InfoPhoto>
                </InfoField>
              </ModalBody>
            </Animated.View>
          </ScrollView>
        </ErrorContainer>
      </Modal>
    );
  }

  const handleBranco = () => {
    // TODO POST COM OBJETO EM BRANCO
  };

  const handleConfirma = () => {
    // TODO POST COM OS DADOS DO VOTO
  };

  return (
    <ScrollView>
      <ModalInfo visible={visible} />
      <Container>
        <Content>
          <HeaderContent>
            <WelcomeMessage>
              <WelcomeText>Olá, {username}!</WelcomeText>
            </WelcomeMessage>
            <IconWrapper onPress={() => setVisible(true)}>
              <Image
                style={{ width: 50, height: 50 }}
                source={require("../../assets/info.png")}
              />
            </IconWrapper>
          </HeaderContent>
          <VoteField>
            <CandidatoField>
              <CandidatoTitle>PREFEITO</CandidatoTitle>
            </CandidatoField>
            <InputVoto>
              <VotoWrapper>
                <CodigoInput
                  maxLength={2}
                  keyboardType="numeric"
                  value={codigoCandidato}
                  onChangeText={(codigoCandidato) =>
                    setCodigoCandidato(codigoCandidato)
                  }
                />
              </VotoWrapper>
            </InputVoto>
            <CandidatoWrapper>
              <NomePartidoWrapper>
                <NomePartido>Nome: </NomePartido>
                <NomePartido>Partido: </NomePartido>
              </NomePartidoWrapper>
              <BoxImageCandidato></BoxImageCandidato>
            </CandidatoWrapper>
          </VoteField>
          <ButtonField>
            <VotoBranco>
              <ButtonText>BRANCO</ButtonText>
            </VotoBranco>
            <Corrige onPress={() => setCodigoCandidato("")}>
              <ButtonText>CORRIGE</ButtonText>
            </Corrige>
            <Confirma>
              <ButtonText>CONFIRMA</ButtonText>
            </Confirma>
          </ButtonField>
        </Content>
      </Container>
    </ScrollView>
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
    height: hp("100%"),
    backgroundColor: "#FFFFFF",
    marginTop: hp("20%"),
    paddingRight: wp("15%"),
    paddingLeft: wp("15%"),
    borderRadius: 30,
    elevation: 50,
  },
});
