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

export const HeaderContent = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: space-between;
  width: ${wp("100%")}px;
  height: ${hp("15%")}px;
  max-height: ${hp("15%")}px;
  flex-direction: row;
`;

export const VoteField = styled.View`
  background-color: #ffffff;
  width: ${wp("100%")}px;
  height: ${hp("45%")}px;
`;

export const WelcomeMessage = styled.View`
  background-color: #ffffff;
  margin-left: ${wp("5%")}px;
  width: ${wp("45%")}px;
  height: ${hp("15%")}px;
  justify-content: center;
`;

export const WelcomeText = styled.Text`
  font-size: ${hp("3%")}px;
  color: #000000;
  font-weight: 500;
`;

export const IconWrapper = styled.TouchableOpacity`
  background-color: #ffffff;
  width: ${wp("15%")}px;
  height: ${hp("15%")}px;
  justify-content: center;
  align-items: center;
`;

export const CandidatoField = styled.View`
  background-color: #ffffff;
  height: ${hp("10%")}px;
  width: ${wp("100%")}px;
  justify-content: flex-start;
`;

export const CandidatoTitle = styled.Text`
  margin-left: ${wp("5%")}px;
  margin-top: ${hp("2%")}px;
  font-size: ${hp("4%")}px;
  color: #000000;
  font-weight: 500;
`;

export const InputVoto = styled.View`
  height: ${hp("13%")}px;
  width: ${wp("100%")}px;
  background-color: #ffffff;
`;

export const CodigoInput = styled.TextInput`
  flex: 1;
  font-size: ${wp("4%")}px;
`;

export const VotoWrapper = styled.View`
  margin-top: ${hp("1%")}px;
  align-items: flex-start;
  padding-left: ${hp("3%")}px;
  margin-left: ${wp("5%")}px;
  justify-content: center;
  width: ${wp("90%")}px;
  height: ${hp("10.5%")}px;
  border-radius: ${hp("1%")}px;
  background-color: #ffffff;
  elevation: 20;
`;

export const CandidatoWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${wp("100%")}px;
  height: ${hp("30%")}px;
`;

export const NomePartidoWrapper = styled.View`
  flex-direction: column;
  justify-content: space-between;
  margin-left: ${wp("5%")}px;
  width: ${wp("50%")}px;
  height: ${hp("10%")}px;
`;

export const NomePartido = styled.Text`
  font-size: ${hp("2%")}px;
  color: #000000;
  font-weight: 600;
`;

export const BoxImageCandidato = styled.View`
  width: ${wp("30%")}px;
  height: ${wp("30%")}px;
  background-color: #ffffff;
  margin-right: ${wp("5%")}px;
  border-radius: ${hp("2%")}px;
  elevation: 20;
`;

export const ButtonField = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #313233;
  width: ${wp("100%")}px;
  height: ${hp("40%")}px;
`;

export const VotoBranco = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: ${wp("2%")}px;
  background-color: #ffffff;
  border-radius: ${hp("2%")}px;
  width: ${wp("30%")}px;
  height: ${hp("10%")}px;
`;

export const Corrige = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #f25f3f;
  border-radius: ${hp("2%")}px;
  width: ${wp("30%")}px;
  height: ${hp("10%")}px;
`;

export const Confirma = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-right: ${wp("2%")}px;
  background-color: #3da319;
  border-radius: ${hp("2%")}px;
  width: ${wp("30%")}px;
  height: ${hp("10%")}px;
`;

export const ButtonText = styled.Text`
  font-size: ${hp("3%")}px;
  color: #000000;
  font-weight: 700;
`;

export const ErrorContainer = styled(Animated.View)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
`;

export const ErrorModal = styled(Animated.View)`
  width: ${wp("80%")}px;
  height: ${hp("40%")}px;
  background-color: #ffffff;
  margin-top: ${hp("20%")}px;
  padding-right: ${wp("15%")}px;
  padding-left: ${wp("15%")}px;
  border-radius: ${hp("3%")}px;
  elevation: 50;
`;

export const ErrorMessage = styled.Text`
  font-size: ${hp("2.5%")}px;
  text-align: center;
  color: #000000;
  font-weight: 700;
`;

export const ModalHeader = styled.View`
  background-color: #ffffff;
  width: ${wp("60%")}px;
  height: ${hp("5%")}px;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.View`
  margin-top: ${hp("1%")}px;
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
  background-color: #ffffff;
  border-radius: ${wp("10%")}px;
  justify-content: flex-end;
`;

export const X = styled.Text`
  font-size: ${hp("3%")}px;
  color: #000000;
  font-weight: 400;
`;

export const InfoField = styled.View`
  flex-direction: row;
  border-radius: ${hp("2%")}px;
  background-color: #ffffff;
  margin-bottom: ${hp("2%")}px;
  width: ${wp("60%")}px;
  height: ${hp("25%")}px;
  justify-content: space-between;
  align-items: center;
  elevation: 20;
`;

export const PrefeitoWrapper = styled.View`
  width: ${wp("60%")}px;
  height: ${hp("20%")}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const InfoTextWrapper = styled.View`
  width: ${wp("30%")}px;
  height: ${hp("15%")}px;
`;

export const InfoText = styled.Text`
  margin-left: ${wp("3%")}px;
  font-size: ${hp("2%")}px;
  color: #000000;
  font-weight: 600;
`;

export const InfoPhoto = styled.View`
  justify-content: center;
  align-items: flex-start;
  border-radius: ${hp("6%")}px;
  margin-right: ${wp("1%")}px;
  background-color: #ffffff;
  width: ${wp("20%")}px;
  height: ${hp("12%")}px;
`;

export const ViceWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  left: 1px;
  top: 100px;
  border-radius: ${hp("3%")}px;
  width: ${wp("60%")}px;
  height: ${hp("10%")}px;
`;

export const ViceInfoWrapper = styled.View`
  width: ${wp("30%")}px;
  height: ${hp("10%")}px;
`;

export const ViceInfoText = styled.Text`
  margin-left: ${wp("3%")}px;
  font-size: ${hp("2%")}px;
  color: #000000;
  font-weight: 600;
`;

export const ViceInfoPhoto = styled.View`
  justify-content: center;
  border-radius: ${hp("6%")}px;
  margin-top: ${wp("3%")}px;
  margin-right: ${wp("7%")}px;
  background-color: #ffffff;
  width: ${wp("10%")}px;
  height: ${hp("5%")}px;
`;
