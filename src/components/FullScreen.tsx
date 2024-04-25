import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

type FullScreenProps = {
  children: ReactNode;
};

export default function FullScreen({ children }: FullScreenProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
