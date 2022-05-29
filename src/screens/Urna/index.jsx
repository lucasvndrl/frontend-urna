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
  PrefeitoWrapper,
  ViceWrapper,
  ViceInfoWrapper,
  ViceInfoText,
  ViceInfoPhoto,
} from "./styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Candidatos } from "../../utils/candidatos";
import { ModalConfirma } from "../../components/ModalConfirma";
import { ModalBranco } from "../../components/ModalBranco";
import { CandidatoInfo } from "./CandidatoInfo";

export function Urna({ navigation }) {
  const [codigoCandidato, setCodigoCandidato] = useState("");
  const [visible, setVisible] = useState(false);
  const [confirma, setConfirma] = useState(false);
  const [branco, setBranco] = useState(false);
  const [selectedCandidato, setSelectedCandidato] = useState(undefined);

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
                <ErrorMessage>Lista de candidatos elegíveis</ErrorMessage>
              </ModalHeader>
              <ModalBody>
                <InfoField>
                  <PrefeitoWrapper>
                    <InfoTextWrapper>
                      <InfoText>Prefeito Testosterona</InfoText>
                      <InfoText>12</InfoText>
                      <InfoText>Partido de Bruno</InfoText>
                    </InfoTextWrapper>
                    <InfoPhoto>
                      <Image
                        style={{ width: 82, height: 82, borderRadius: 50 }}
                        source={require("../../assets/bruno.jpeg")}
                      />
                    </InfoPhoto>
                  </PrefeitoWrapper>
                  <ViceWrapper>
                    <ViceInfoWrapper>
                      <ViceInfoText>Vice</ViceInfoText>
                      <ViceInfoText>Testosteroninha Leão</ViceInfoText>
                    </ViceInfoWrapper>
                    <ViceInfoPhoto>
                      <Image
                        style={{ width: 50, height: 50, borderRadius: 50 }}
                        source={require("../../assets/funky.jpg")}
                      />
                    </ViceInfoPhoto>
                  </ViceWrapper>
                </InfoField>
                <InfoField>
                  <PrefeitoWrapper>
                    <InfoTextWrapper>
                      <InfoText>Renato Loureiro</InfoText>
                      <InfoText>44</InfoText>
                      <InfoText>Partido dos fortes</InfoText>
                    </InfoTextWrapper>
                    <InfoPhoto>
                      <Image
                        style={{ width: 82, height: 82, borderRadius: 50 }}
                        source={require("../../assets/renato.jpg")}
                      />
                    </InfoPhoto>
                  </PrefeitoWrapper>
                  <ViceWrapper>
                    <ViceInfoWrapper>
                      <ViceInfoText>Vice</ViceInfoText>
                      <ViceInfoText>Whey Stronda</ViceInfoText>
                    </ViceInfoWrapper>
                    <ViceInfoPhoto>
                      <Image
                        style={{ width: 50, height: 50, borderRadius: 50 }}
                        source={require("../../assets/eu.jpeg")}
                      />
                    </ViceInfoPhoto>
                  </ViceWrapper>
                </InfoField>
                <InfoField>
                  <PrefeitoWrapper>
                    <InfoTextWrapper>
                      <InfoText>Max Verstappen</InfoText>
                      <InfoText>33</InfoText>
                      <InfoText>Partido dos rápidos</InfoText>
                    </InfoTextWrapper>
                    <InfoPhoto>
                      <Image
                        style={{ width: 82, height: 82, borderRadius: 50 }}
                        source={require("../../assets/max.jpg")}
                      />
                    </InfoPhoto>
                  </PrefeitoWrapper>
                  <ViceWrapper>
                    <ViceInfoWrapper>
                      <ViceInfoText>Vice</ViceInfoText>
                      <ViceInfoText>Ayrton Senna</ViceInfoText>
                    </ViceInfoWrapper>
                    <ViceInfoPhoto>
                      <Image
                        style={{ width: 50, height: 50, borderRadius: 50 }}
                        source={require("../../assets/ayrton.jpg")}
                      />
                    </ViceInfoPhoto>
                  </ViceWrapper>
                </InfoField>
              </ModalBody>
            </Animated.View>
          </ScrollView>
        </ErrorContainer>
      </Modal>
    );
  }

  useEffect(() => {
    checkVoto(codigoCandidato);
  }, [codigoCandidato]);

  const checkVoto = (codigoCandidato) => {
    const foundCandidato = Candidatos.find(
      (candidato) => candidato.codigo === codigoCandidato
    );
    setSelectedCandidato(foundCandidato);
  };

  return (
    <ScrollView>
      <ModalInfo visible={visible} />
      <ModalConfirma
        visible={confirma}
        setVisible={setConfirma}
        navigation={navigation}
      />
      <ModalBranco
        visible={branco}
        setVisible={setBranco}
        navigation={navigation}
      />
      <Container>
        <Content>
          <HeaderContent>
            <WelcomeMessage>
              <WelcomeText>Olá, eleitor!</WelcomeText>
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
                  onChangeText={(codigoCandidato) => {
                    setCodigoCandidato(codigoCandidato);
                  }}
                />
              </VotoWrapper>
            </InputVoto>
            {selectedCandidato && <CandidatoInfo info={selectedCandidato} />}
          </VoteField>
          <ButtonField>
            <VotoBranco onPress={() => setBranco(true)}>
              <ButtonText>BRANCO</ButtonText>
            </VotoBranco>
            <Corrige onPress={() => setCodigoCandidato("")}>
              <ButtonText>CORRIGE</ButtonText>
            </Corrige>
            <Confirma onPress={() => setConfirma(true)}>
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
