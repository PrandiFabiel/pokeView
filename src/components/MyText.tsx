import { StyleSheet, Text } from "react-native";
import { useFonts } from "@expo-google-fonts/roboto";
import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import React from "react";
import { IMyText } from "../interfaces/IMyText";

const CustomText = ({ numberOfLines, text, style }: IMyText): JSX.Element => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {text}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontFamily: "OpenSans_400Regular",
  },
});
