import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    
    maxWidth: "90%",
    borderRadius: 4,
    padding: 8,
    width: "100%",
  },
});