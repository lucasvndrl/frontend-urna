import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Animated } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  margin-bottom: ${hp("25%")}px;
`;

export const CPFInput = styled.TextInput`
  flex: 1;
  font-size: ${wp("4%")}px;
`;

export const CPFWrapper = styled.TouchableOpacity`
  margin-top: ${hp("3%")}px;
  align-items: flex-start;
  padding-left: ${hp("3%")}px;
  justify-content: center;
  width: ${wp("90%")}px;
  height: ${hp("10.5%")}px;
  border-radius: ${hp("1%")}px;
  background-color: #ffffff;
  elevation: 20;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  margin-top: ${hp("3%")}px;
  align-items: center;
  justify-content: center;
  width: ${wp("90%")}px;
  height: ${hp("7.5%")}px;
  border-radius: ${hp("1%")}px;
  background-color: #313233;
  position: absolute;
  bottom: 40px;
`;

export const Title = styled.Text`
  font-size: ${hp("3.5%")}px;
  color: #313233;
  margin-bottom: ${hp("4%")}px;
  font-weight: 700;
  line-height: ${hp("3.5%")}px;
  font-family: poppins-bold;
`;

export const ButtonText = styled.Text`
  font-size: ${hp("3.5%")}px;
  color: #ffffff;
  font-weight: 700;
`;

export const Loading = styled.ActivityIndicator`
  margin-bottom: ${hp("1%")}px;
`;

export const ErrorContainer = styled(Animated.View)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0);
  align-items: center;
`;

export const ErrorModal = styled(Animated.View)`
  width: ${wp("80%")}px;
  height: ${hp("40%")}px;
  background-color: #fd7979;
  margin-top: ${hp("20%")}px;
  padding-right: ${wp("15%")}px;
  padding-left: ${wp("15%")}px;
  border-radius: ${hp("3%")}px;
  elevation: 50;
`;

export const ErrorMessage = styled.Text`
  font-size: ${hp("3.5%")}px;
  color: #ffffff;
  font-weight: 700;
`;

export const ModalHeader = styled.View`
  margin-top: ${hp("7%")}px;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.View`
  margin-top: ${hp("5%")}px;
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
  background-color: #fd7979;
  border-radius: ${wp("10%")}px;
  justify-content: flex-end;
`;

export const X = styled.Text`
  font-size: ${hp("3%")}px;
  color: #ffffff;
  font-weight: 400;
`;
