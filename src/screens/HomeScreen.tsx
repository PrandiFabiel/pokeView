import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Iiterval from "../interfaces/IintervalApi";
import Spinner from "react-native-loading-spinner-overlay";
import PokemonsList from "../components/PokemonsList";
import { IPokemon } from "../interfaces/IPokemon";
import { PokemonService } from "../services/pokemon-service";

const HomeScreen = () => {
  const { keyExtractor, PokemonListComponent } = PokemonsList();

  //Infinity scroll
  const [offset, setOffset] = useState<number>(0);
  const [isListEnd, setListEnd] = useState<boolean>(false);
  const [isLoadingFooter, setIsLoadingFooter] = useState<boolean>(false);
  const [Pokemons, setPokemons] = useState<IPokemon[]>([]);

  const interval: Iiterval = {
    offset: offset,
    limit: 10,
  };

  const renderLoader = () => {
    return isLoadingFooter ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    if (!isListEnd) {
      setOffset(offset + 10);
    }
  }; 

  const GetPokemons = () => {
    setIsLoadingFooter(true);
    PokemonService.P.getPokemonsList(interval)
      .then((e) => {
        let results = e.results;
        let detailsPokemons = results.map(async (e) => {
          return await PokemonService.P.getPokemonByName(e.name).then((e) => e);
        });
        return Promise.all(detailsPokemons);
      })
      .then((e) => {
        let res = e as unknown as IPokemon[];
        setIsLoadingFooter(false);
        setPokemons((data) => [...data, ...res]);
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
        setIsLoadingFooter(true);
        setListEnd(true);
      });
  };

  useEffect(() => {
    GetPokemons();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Spinner visible={false} />
      <View style={{ flex: 1 }}>
        <FlatList
          numColumns={2}
          keyExtractor={keyExtractor}
          data={Pokemons}
          initialNumToRender={8}
          renderItem={PokemonListComponent}
          onEndReachedThreshold={0.3}
          ListFooterComponent={renderLoader}
          //onEndReached={loadMoreItem}
          maxToRenderPerBatch={8}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});
