import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from './services/api-pokemon.service';
import {
  GetPokemonResult,
  Pokemon,
  DetailPokemon,
  SpeciesPokemon,
} from './model/pokemon';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title: string = 'Listado de Pokemon';
  limit: number = environment.ITEMS_BY_PAGE;
  offset: number = 0;
  pokemons: Pokemon[] = [];
  selectedPokemon: Pokemon | null = null;
  disabledNext: boolean = true;
  disabledBack: boolean = true;

  constructor(private apiPokemonServices: ApiPokemonService) {}

  ngOnInit() {
    this.searchPokemons();
  }

  async searchPokemons() {
    this.pokemons = [];
    this.selectedPokemon = null;
    try {
      const getPokemons: GetPokemonResult = await this.apiPokemonServices
        .getPokemons(this.limit.toString(), this.offset.toString())
        .toPromise();
      const listPokemons: Pokemon[] = [];

      if (getPokemons.next) this.disabledNext = false;
      else this.disabledNext = true;
      if (getPokemons.previous) this.disabledBack = false;
      else this.disabledBack = true;

      for await (const pokemon of getPokemons.results) {
        const urlPokemon = pokemon.url as string;
        try {
          const detailPokemon: DetailPokemon = (await this.apiPokemonServices
            .getInfoPokemon(urlPokemon)
            .toPromise()) as DetailPokemon;

          const speciesPokemon: SpeciesPokemon = (await this.apiPokemonServices
            .getInfoPokemon(detailPokemon.species.url)
            .toPromise()) as SpeciesPokemon;

          const addDetailPokemon: Pokemon = {
            ...pokemon,
            detailPokemon,
            speciesPokemon,
          };
          listPokemons.push(addDetailPokemon);
        } catch (error) {
          console.log(error);
        }
      }

      this.pokemons = listPokemons;
    } catch (error) {
      console.log(error);
    }
  }

  async searchPokemon(value: string) {
    this.pokemons = [];
    this.selectedPokemon = null;
    this.disabledNext = true;
    this.disabledBack = true;
    if (value.length > 3) {
      try {
        const listPokemons: Pokemon[] = [];
        const detailPokemon: DetailPokemon = (await this.apiPokemonServices
          .getPokemon(value.toLowerCase())
          .toPromise()) as DetailPokemon;
        const speciesPokemon: SpeciesPokemon = (await this.apiPokemonServices
          .getInfoPokemon(detailPokemon.species.url)
          .toPromise()) as SpeciesPokemon;
        const addDetailPokemon: Pokemon = {
          name: detailPokemon.name,
          detailPokemon,
          speciesPokemon,
        };
        listPokemons.push(addDetailPokemon);
        this.pokemons = listPokemons;
      } catch (error) {
        console.log(error);
      }
    }
    if (value.length === 0) this.searchPokemons();
  }

  paginationBack() {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.searchPokemons();
    }
  }

  paginationNext() {
    if (this.offset !== 0 || this.offset === 0) {
      this.offset += this.limit;
      this.searchPokemons();
    }
  }

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }
}
