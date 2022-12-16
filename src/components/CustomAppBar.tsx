import { StyleSheet, Text, View, Image } from "react-native";
import { Appbar, Card } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { IAppBar } from "../interfaces/IAppBar";
import CustomStatusBar from "./CustomStatusBar";

const CustomAppBar = (Pokemon: IAppBar) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={styles.AppBarHeader}>
      <CustomStatusBar />
      <Card style={styles.card}>
        <View>
          <Image source={{uri: Pokemon.ImgPokemon }} style={styles.image} />
        </View>
        <View style={styles.view}></View>
      </Card>
      <Appbar.Content
        style={{ alignItems: "center" }}
        title={Pokemon.nombrePokemon}
      />
    </Appbar.Header>
  );
};

export default CustomAppBar;

const styles = StyleSheet.create({
  AppBarHeader: {
    marginTop: 0,
  },
  view: {
    flexDirection: "row",
  },
  card: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
  },
});
