import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";
import AppLoading from "expo-app-loading";

import { SignIn } from "./src/screens/SignIn";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    "poppins-black": require("./src/assets/Poppins/Poppins-Black.ttf"),
    "poppins-bold": require("./src/assets/Poppins/Poppins-Bold.ttf"),
    "poppins-regular": require("./src/assets/Poppins/Poppins-Regular.ttf"),
    "poppins-semibold": require("./src/assets/Poppins/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Routes />
    </>
  );
}
