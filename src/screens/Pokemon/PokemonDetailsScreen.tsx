import {
  Route,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomAppBar from "../../components/CustomAppBar";
import { IPokemon } from "../../interfaces/IPokemon";
import usePokeApi from "../../hooks/usePokeApi";
import Spinner from "react-native-loading-spinner-overlay";
import TabsDetailsPokemon from "./TabsDetailsPokemon";

const PokemonDetailsScreen = (props: Route) => {
  
  const Pokemon: IPokemon = props.route.params?.item;
  const { GetColorPokemon, colorPokemon, isLoading } = usePokeApi();

  const uri: string = Pokemon.sprites.other?.["official-artwork"]
    .front_default as string;

  useEffect(() => {
    GetColorPokemon(uri);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colorPokemon?.colors?.dominant?.hex,
      }}
    >
      <CustomAppBar
        color={colorPokemon?.colors?.dominant?.hex}
        color2={colorPokemon?.colors?.other[1].hex}
        nombrePokemon={Pokemon.name}
        idPokemon={Pokemon.id}
        types={Pokemon.types}
        ImgPokemon={Pokemon.sprites.other?.["official-artwork"].front_default}
      />
      <Spinner visible={isLoading} />
      {isLoading ? (
        <></>
      ) : (
        <TabsDetailsPokemon colorPokemon={colorPokemon} Pokemon={Pokemon}/>
      )}
    </SafeAreaView>
  );
};

export default PokemonDetailsScreen;
