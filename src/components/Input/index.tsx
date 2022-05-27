import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import styled from "styled-components";

import { Container } from "./styles";

type Props = TextInputProps;

export function Input(setProps: Function, value: Object, { ...rest }: Props) {
  return (
    <Container>
      <TextInput
        placeholder="Qual é o seu CPF?"
        placeholderTextColor="#9a9a9a"
        keyboardType="numeric"
        style={styles.input}
        value={value}
        onChangeText={(e) => setProps(e.target.value)}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 3,
  },
});
