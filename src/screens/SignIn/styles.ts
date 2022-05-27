import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RegularText } from "../../components/BaseFonts";

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
  bottom: 40;
`;

export const Title = styled(RegularText)`
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
