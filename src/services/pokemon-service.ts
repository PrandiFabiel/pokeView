import httpCommon from "../shared/http-common";
import { ITodosPokemon } from "../interfaces/ITodosPokemon";
import Iiterval from "../interfaces/IintervalApi";
import axios from "axios";
import { IPokemon } from "../interfaces/IPokemon";

const GetPokemonsList = async (interval: Iiterval) => {
  return await httpCommon.get<ITodosPokemon>(`pokemon?offset=${interval.offset}&limit=${interval.limit}`);
}; 

const GetPokemon = async (URL: string) => {
    return await axios.get<IPokemon>(URL);
}

export const PokemonService = {
  GetPokemonsList,
  GetPokemon
};
