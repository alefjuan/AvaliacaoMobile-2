
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TextInputProps,
  } from "react-native";
  import React from "react";
  
  type FormInput = {
    label?: string;
  } & TextInputProps;
  
  export default function FormInput({ label, ...rest }: FormInput) {
    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput {...rest} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 8,
      margin:2,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      borderRadius: 4,
      padding: 4,
      width: "100%",
    },
    label: {
      fontWeight: "bold",
    },
  });
  