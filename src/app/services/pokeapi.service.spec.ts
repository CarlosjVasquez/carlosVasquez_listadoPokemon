import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import {
  DetailPokemon,
  GetPokemonResult,
  SpeciesPokemon,
} from '../model/pokemon';

import { PokeapiService } from './pokeapi.service';
import { environment } from '../../environments/environment.prod';

describe('PokeapiService', () => {
  let service: PokeapiService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  const mockPokemonResults: GetPokemonResult = {
    next: 'https://next_link.com',
    previous: 'https://previus_link.com',
    results: [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
    ],
  };

  const mockDetailPokemon: DetailPokemon = {
    name: 'bulbasaur',
    id: 1,
    sprites: {
      front_default: 'https://front_default.com',
      back_default: 'https://back_default.com',
      front_shiny: 'https://front_shiny.com',
      back_shiny: 'https://back_shiny.com',
      other: {
        dream_world: {
          front_default: 'https://front_default.com',
        },
      },
    },
    moves: [
      {
        move: {
          name: 'tackle',
          url: 'https://pokeapi.co/api/v2/move/527/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    species: {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
    },
    weight: 69,
  };
  const mockSpeciesPokemon: SpeciesPokemon = {
    color: {
      name: 'green',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokeapiService);
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get pokemons', () => {
    const limit = String(environment.ITEMS_BY_PAGE);
    const offset = '0';

    service.getPokemons(limit, offset).subscribe((pokemons) => {
      expect(pokemons.results.length).toBeGreaterThan(1);
      expect(pokemons.next).toBe('https://next_link.com');
    });
    const req = httpMock.expectOne(
      `${environment.API_URL}/pokemon?limit=${limit}&offset=${offset}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockPokemonResults);
  });

  it('should get pokemon', () => {
    service
      .getPokemon(mockDetailPokemon.name)
      .subscribe((pokemon: DetailPokemon) => {
        expect(pokemon.sprites.front_default).toBe('https://front_default.com');
        expect(pokemon.moves[0].move.name).toBe('tackle');
        expect(pokemon.types[0].type.name).toBe('poison');
        expect(pokemon.species.name).toBe('bulbasaur');
      });
    const req = httpMock.expectOne(
      `${environment.API_URL}/pokemon/${mockDetailPokemon.name}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockDetailPokemon);
  });

  it('should get info pokemon detail', () => {
    const urlDetail = mockPokemonResults.results[0].url;

    service
      .getInfoPokemon(urlDetail || '')
      .subscribe((pokemon: DetailPokemon | SpeciesPokemon) => {
        const { sprites }: DetailPokemon = pokemon as DetailPokemon;
        expect(sprites.front_default).toBe('https://front_default.com');
      });
    const req = httpMock.expectOne(urlDetail || '');
    expect(req.request.method).toBe('GET');
    req.flush(mockDetailPokemon);
  });

  it('should get info pokemon species', () => {
    const urlSpecies = mockDetailPokemon.species.url;

    service
      .getInfoPokemon(urlSpecies)
      .subscribe((pokemon: DetailPokemon | SpeciesPokemon) => {
        const { color }: SpeciesPokemon = pokemon as SpeciesPokemon;
        expect(color.name).toBe('green');
      });
    const req = httpMock.expectOne(urlSpecies);
    expect(req.request.method).toBe('GET');
    req.flush(mockSpeciesPokemon);
  });
});
