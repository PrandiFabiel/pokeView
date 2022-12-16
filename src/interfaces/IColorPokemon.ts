export interface IColorPokemon {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecy[];
}

export interface Name {
  name: string;
  language: PokemonSpecy;
}

export interface PokemonSpecy {
  name: string;
  url: string;
}
