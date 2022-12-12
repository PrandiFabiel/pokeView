import React, { useCallback } from "react";

import { View, StyleSheet, TouchableOpacity } from "react-native";

import { Card } from "react-native-paper";
import { IPokemon } from "../interfaces/IPokemon";

import CardPokemonComponent from "./CardPokemonComponent";

const PokemonsList = () => {
  const keyExtractor = useCallback(
    (item: IPokemon, index: number) => index.toString(),
    []
  );

  const PokemonListComponent = useCallback(
    ({ item, index }: any) => (
      <View style={{ width: "50%", padding: 5 }}>
        <Card style={Styles.Card}>
          <TouchableOpacity onPress={() => {console.log("Algo")}}>
            <CardPokemonComponent {...item} />
          </TouchableOpacity>
        </Card>
      </View>
    ),
    []
  );

  return {
    keyExtractor,
    PokemonListComponent,
  };
};

const Styles = StyleSheet.create({
  Card: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default PokemonsList;
