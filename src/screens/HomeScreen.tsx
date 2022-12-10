import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import useApi from "../hooks/usePokeApi";
import Iiterval from "../interfaces/IintervalApi";
import Spinner from "react-native-loading-spinner-overlay";

const HomeScreen = () => {
  const { GetPokemonList, PokemonList, isLoading } = useApi();

  const interval: Iiterval = {
    offset: 0,
    limit: 0,
  };

  useEffect(() => {
    GetPokemonList(interval);
  }, []);
  return (
    <View>
      <Spinner visible={isLoading} />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
