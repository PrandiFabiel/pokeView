import { useState, useEffect } from "react";
import Iiterval from "../interfaces/IintervalApi";
import { IPokemon } from "../interfaces/IPokemon";
import { PokemonService } from "../services/pokemon-service";
import Pokedex from "pokedex-promise-v2";
import axios from "axios";
import { IDominantColor } from "../interfaces/IColorDetection";
const P = new Pokedex();

const usePokeApi = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [PokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [colorPokemon, setColorPokemon] = useState<IDominantColor>({} as IDominantColor);

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
      })
      .catch((e) => {
        setLoading(false);
        console.log(`Error: ${e}`);
      });
  };

  const GetColorPokemon = async (uri: string) => {
    await axios
      .get<IDominantColor>("https://api.sightengine.com/1.0/check.json", {
        params: {
          url: uri,
          models: "properties",
          api_user: "1235019600",
          api_secret: "xDoifRKeU6bQMD5gNdCC",
        },
      })
      .then((e) => {
        setLoading(false);
        setColorPokemon(e.data);
      })
      .catch((e) => {
        setLoading(false);
        console.log("Erro: ", e);
      });
  };

  return {
    GetPokemonList,
    PokemonList,
    isLoading,
    GetColorPokemon,
    colorPokemon,
  };
};

export default usePokeApi;
