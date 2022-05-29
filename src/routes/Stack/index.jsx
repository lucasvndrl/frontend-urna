import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../../screens/SignIn/index";
import { Urna } from "../../screens/Urna/index";

const { Navigator, Screen } = createNativeStackNavigator();

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
    </Navigator>
  );
}
