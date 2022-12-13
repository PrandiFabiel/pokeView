import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React, { useCallback, useEffect } from "react";
import usePokeApi from "../hooks/usePokeApi";
import Iiterval from "../interfaces/IintervalApi";
import Spinner from "react-native-loading-spinner-overlay";
import PokemonsList from "../components/PokemonsList";

const ITEM_HEIGHT: number = 180;

const interval: Iiterval = {
  offset: 0,
  limit: 50, //en 90 ya empieza a mostrar fallas de rendimiento
};

const HomeScreen = () => {
  const { GetPokemonList, PokemonList, isLoading } = usePokeApi();
  const { keyExtractor, PokemonListComponent } = PokemonsList();

  useEffect(() => {
    GetPokemonList(interval);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Spinner visible={isLoading} />
      <View style={{ flex: 1 }}>
        <FlatList
          numColumns={2}
          keyExtractor={keyExtractor}
          data={PokemonList}
          legacyImplementation={true}
          initialNumToRender={10}
          renderItem={PokemonListComponent}
          onEndReachedThreshold={0.5}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          maxToRenderPerBatch={10}
          removeClippedSubviews={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
