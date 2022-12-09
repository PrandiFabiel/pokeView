import React from "react";

import { View, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Appbar } from "react-native-paper";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { IDrawerHaeder } from "../interfaces/IDrawerHeader";

export default function HeaderDrawerItems({ titulo }: IDrawerHaeder) {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <StatusBar animated={true} style="dark" />
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
        <Appbar.Content title={titulo} style={{ alignItems: "flex-start", marginStart: 15 }} />
    </Appbar.Header>
  );
}

const Styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
  imageTitulo: {
    width: "100%",
    height: "100%",
  },
});
