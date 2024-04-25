import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type FormInput = {
  title: string;
} & TouchableOpacityProps;

export default function FormButton({ title, ...rest }: FormInput) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
  },
});