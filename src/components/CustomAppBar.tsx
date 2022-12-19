import { StyleSheet, Text, View, Image } from "react-native";
import { Appbar, Card } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { IAppBar } from "../interfaces/IAppBar";
import CustomStatusBar from "./CustomStatusBar";

const CustomAppBar = (Pokemon: IAppBar) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={[styles.AppBarHeader, {backgroundColor: Pokemon.color}]}>
      <CustomStatusBar />
      <Card style={[styles.card, {backgroundColor: Pokemon.color2}]}>
        <View>
          <Image source={{ uri: Pokemon.ImgPokemon }} style={styles.image} />
        </View>
        <View style={styles.view}></View>
      </Card>
    </Appbar.Header>
  );
};

export default CustomAppBar;

const styles = StyleSheet.create({
  AppBarHeader: {
  },
  view: {
    flexDirection: "row",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    width: "100%"
  },
  image: {
    width: 60,
    height: 60,
  },
});
