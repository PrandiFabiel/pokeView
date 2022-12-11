import { useState, useEffect } from "react";
import Iiterval from "../interfaces/IintervalApi";
import { IPokemon } from "../interfaces/IPokemon";
import { PokemonService } from "../services/pokemon-service";

const usePokeApi = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [PokemonList, setPokemonList] = useState<IPokemon[] | null>([]);

  const GetPokemonList = async (interval: Iiterval) => {
    await PokemonService.GetPokemonsList(interval)
      .then((e) => {
        let results = e.data.results;
        let detailsPokemons = results.map(async (e) => {
          return await PokemonService.GetPokemon(e.url).then((e) => e.data);
        });
        return Promise.all(detailsPokemons);
      })
      .then((e) => {
        setLoading(false);
        setPokemonList(e);
        /*PokemonList?.map((e) => {
          //console.log("Name: ", e.name);
          console.log("El sprite: ",e.sprites.other?.["official-artwork"].front_default); 
          e.types.map((e) => {
            //console.log("Types: ", e.type);
          });
        });*/
      })
      .catch((e) => {
        setLoading(false);
        console.log(`Error: ${e}`);
      });
  };

  return {
    GetPokemonList,
    PokemonList,
    isLoading,
  };
};

export default usePokeApi;
