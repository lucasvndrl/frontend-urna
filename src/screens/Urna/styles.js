import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
  background-color: #fd7979;
  justify-content: space-between;
  width: ${wp("100%")}px;
  height: ${hp("15%")}px;
  max-height: ${hp("15%")}px;
  flex-direction: row;
`;

export const VoteField = styled.View`
  background-color: #313233;
  width: ${wp("100%")}px;
  height: ${hp("45%")}px;
`;

export const KeyboardField = styled.View`
  background-color: #3da319;
  width: ${wp("100%")}px;
  height: ${hp("40%")}px;
`;

export const WelcomeMessage = styled.View`
  background-color: #000000;
  width: ${wp("45%")}px;
  height: ${hp("15%")}px;
  justify-content: center;
  align-items: center;
`;

export const WelcomeText = styled.Text`
  font-size: ${hp("2%")}px;
  color: #ffffff;
  font-weight: 500;
`;

export const Test = styled.View`
  background-color: #000000;
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
  margin-left: ${hp("2%")}px;
  margin-top: ${hp("2%")}px;
  font-size: ${hp("4%")}px;
  color: #000000;
  font-weight: 500;
`;
