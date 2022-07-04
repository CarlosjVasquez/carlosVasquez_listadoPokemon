export interface Pokemon {
  detailPokemon?: DetailPokemon;
  name: string;
  speciesPokemon?: SpeciesPokemon;
  url?: string;
}
export interface SpeciesPokemon {
  color: colorPokemon;
}
type colorPokemon = {
  name: string;
};
export interface DetailPokemon {
  name: string;
  id: number;
  moves: MovePokemon[];
  species: speciesPokemon;
  sprites: SpritesPokemon;
  types: TypePokemon[];
  weight: number;
}
type speciesPokemon = {
  name: string;
  url: string;
};
export interface MovePokemon {
  move: movePokemon;
}
type movePokemon = {
  name: string;
  url: string;
};
export interface SpritesPokemon {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: OtherSpritesPokemon;
}
export interface TypePokemon {
  slot: number;
  type: typePokemon;
}
type typePokemon = {
  name: string;
  url: string;
};
export interface OtherSpritesPokemon {
  dream_world: DreamWorldSpritesPokemon;
}

export interface DreamWorldSpritesPokemon {
  front_default: string;
}
export interface GetPokemonResult {
  results: Pokemon[];
  next: string;
  previous: string;
}
