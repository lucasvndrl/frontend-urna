import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../../screens/SignIn/index";
import { Urna } from "../../screens/Urna/index";
import { ModalConfirma } from "../../components/ModalConfirma";
import { ModalBranco } from "../../components/ModalBranco";

const { Navigator, Screen, RootStack } = createNativeStackNavigator();

export default function Stack() {
  return (
    <Navigator
      initialRouteName="Urna"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Urna" component={Urna} />
      <Screen
        name="ModalConfirma"
        component={ModalConfirma}
        screenOptions={{ presentation: "modal" }}
      />
      <Screen
        name="ModalBranco"
        component={ModalBranco}
        screenOptions={{ presentation: "modal" }}
      />
    </Navigator>
  );
}
