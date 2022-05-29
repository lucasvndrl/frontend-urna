import { Animated, Modal, ScrollView, StyleSheet } from "react-native";
import {
  CloseButton,
  CloseModal,
  ModalContainer,
  ModalMessage,
  ModalBody,
  ModalHeader,
  X,
  BackButton,
} from "./styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useEffect, useRef, useState } from "react";

export function ModalBranco({
  visible,
  setVisible,
  children,
  navigation,
  type,
}) {
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
        <ModalContainer>
          <Animated.View
            style={[
              styles.modalStyleBranco,
              { transform: [{ scale: scaleValue }] },
            ]}
          >
            <CloseButton>
              <CloseModal onPress={() => setVisible(false)}>
                <X>X</X>
              </CloseModal>
            </CloseButton>
            <ModalHeader>
              <ModalMessage>FIM!</ModalMessage>
            </ModalHeader>
            <ModalBody>
              <ModalMessage>Seu voto foi computado!</ModalMessage>
              <BackButton onPress={() => navigation.navigate("SignIn")}>
                <ModalMessage>Próximo</ModalMessage>
              </BackButton>
            </ModalBody>
          </Animated.View>
        </ModalContainer>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 3,
  },
  modalStyleConfirma: {
    width: wp("90%"),
    height: hp("40%"),
    backgroundColor: "#89C928",
    marginTop: hp("20%"),
    paddingRight: wp("15%"),
    paddingLeft: wp("15%"),
    borderRadius: 30,
    elevation: 50,
  },
  modalStyleBranco: {
    width: wp("90%"),
    height: hp("40%"),
    backgroundColor: "#FFFFFF",
    marginTop: hp("20%"),
    paddingRight: wp("15%"),
    paddingLeft: wp("15%"),
    borderRadius: 30,
    elevation: 50,
  },
});
