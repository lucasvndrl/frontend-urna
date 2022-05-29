import { Animated } from "react-native";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const ModalContainer = styled(Animated.View)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0);
  align-items: center;
`;

export const Modal = styled(Animated.View)`
  width: ${wp("80%")}px;
  height: ${hp("40%")}px;
  background-color: #fd7979;
  margin-top: ${hp("20%")}px;
  padding-right: ${wp("15%")}px;
  padding-left: ${wp("15%")}px;
  border-radius: ${hp("3%")}px;
  elevation: 50;
`;

export const ModalMessage = styled.Text`
  font-size: ${hp("3.5%")}px;
  color: #ffffff;
  font-weight: 700;
`;

export const ModalHeader = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.View`
  margin-top: ${hp("2%")}px;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.View`
  width: ${wp("65%")}px;
  height: 40px;
  align-items: flex-end;
  justify-content: center;
`;

export const CloseModal = styled.TouchableOpacity`
  background-color: #89c928;
  border-radius: ${wp("10%")}px;
  justify-content: flex-end;
`;

export const X = styled.Text`
  font-size: ${hp("3%")}px;
  color: #ffffff;
  font-weight: 400;
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: ${hp("5%")}px;
  background-color: #89c928;
  border-radius: ${wp("10%")}px;
  width: ${wp("65%")}px;
  height: ${hp("10%")}px;
  elevation: 50;
`;
