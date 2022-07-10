import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardDetailPokemonComponent } from './components/card-detail-pokemon/card-detail-pokemon.component';
import { CardSimplePokemonComponent } from './components/card-simple-pokemon/card-simple-pokemon.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import {
  DetailPokemon,
  GetPokemonResult,
  Pokemon,
  SpeciesPokemon,
} from './model/pokemon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokeapiService } from './services/pokeapi.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const mockPokemon: Pokemon = {
    name: 'caterpie',
    url: 'https://pokeapi.co/api/v2/pokemon/10/',
    detailPokemon: {
      id: 10,
      moves: [
        {
          move: {
            name: 'tackle',
            url: 'https://pokeapi.co/api/v2/move/33/',
          },
        },
        {
          move: {
            name: 'string-shot',
            url: 'https://pokeapi.co/api/v2/move/81/',
          },
        },
        {
          move: {
            name: 'snore',
            url: 'https://pokeapi.co/api/v2/move/173/',
          },
        },
        {
          move: {
            name: 'bug-bite',
            url: 'https://pokeapi.co/api/v2/move/450/',
          },
        },
        {
          move: {
            name: 'electroweb',
            url: 'https://pokeapi.co/api/v2/move/527/',
          },
        },
      ],
      name: 'caterpie',
      species: {
        name: 'caterpie',
        url: 'https://pokeapi.co/api/v2/pokemon-species/10/',
      },
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png',
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/10.png',
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png',
        other: {
          dream_world: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg',
          },
        },
      },
      types: [
        {
          slot: 1,
          type: {
            name: 'bug',
            url: 'https://pokeapi.co/api/v2/type/7/',
          },
        },
      ],
      weight: 29,
    },
    speciesPokemon: {
      color: {
        name: 'green',
      },
    },
  };
  const mockPokemonResults: GetPokemonResult = {
    next: '',
    previous: '',
    results: [
      {
        name: 'caterpie',
        url: 'https://pokeapi.co/api/v2/pokemon/10/',
      },
    ],
  };

  const mockDetailPokemon: DetailPokemon = {
    id: 10,
    moves: [
      {
        move: {
          name: 'tackle',
          url: 'https://pokeapi.co/api/v2/move/33/',
        },
      },
      {
        move: {
          name: 'string-shot',
          url: 'https://pokeapi.co/api/v2/move/81/',
        },
      },
      {
        move: {
          name: 'snore',
          url: 'https://pokeapi.co/api/v2/move/173/',
        },
      },
      {
        move: {
          name: 'bug-bite',
          url: 'https://pokeapi.co/api/v2/move/450/',
        },
      },
      {
        move: {
          name: 'electroweb',
          url: 'https://pokeapi.co/api/v2/move/527/',
        },
      },
    ],
    name: 'caterpie',
    species: {
      name: 'caterpie',
      url: 'https://pokeapi.co/api/v2/pokemon-species/10/',
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png',
      back_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/10.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
      front_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png',
      other: {
        dream_world: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg',
        },
      },
    },
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
    ],
    weight: 29,
  };
  const mockSpeciesPokemon: SpeciesPokemon = {
    color: {
      name: 'green',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent,
        SearchComponent,
        PaginationComponent,
        CardComponent,
        CardDetailPokemonComponent,
        CardSimplePokemonComponent,
        ButtonComponent,
      ],
      providers: [PokeapiService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title`, () => {
    expect(component.title).toEqual('Listado de Pokemon');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.header h1').textContent).toContain(
      'Listado de Pokemon'
    );
  });

  it('should select pokemon', () => {
    component.selectPokemon(mockPokemon);
    expect(component.selectedPokemon?.name).toBe('caterpie');
  });

  it('should next page', () => {
    const spySearchPokemons = jest.spyOn(component, 'searchPokemons');
    component.paginationNext();

    expect(spySearchPokemons).toHaveBeenCalled();
  });

  it('should back page', () => {
    const spySearchPokemons = jest.spyOn(component, 'searchPokemons');
    component.offset = 10;
    component.paginationBack();

    expect(spySearchPokemons).toHaveBeenCalled();
  });

  it('should search pokemons', async () => {
    const searchPokemonsService =
      fixture.debugElement.injector.get(PokeapiService);
    const spySearchPokemons = jest.spyOn(component, 'searchPokemons');
    const spyGetPokemons = jest
      .spyOn(searchPokemonsService, 'getPokemons')
      .mockReturnValue(of(mockPokemonResults));
    jest
      .spyOn(searchPokemonsService, 'getInfoPokemon')
      .mockReturnValueOnce(of(mockDetailPokemon));
    const spyGetInfoPokemon = jest
      .spyOn(searchPokemonsService, 'getInfoPokemon')
      .mockReturnValue(of(mockSpeciesPokemon));
    await component.searchPokemons();
    expect(spySearchPokemons).toHaveBeenCalled();
    expect(spyGetPokemons).toHaveBeenCalled();
    expect(spyGetInfoPokemon).toHaveBeenCalledTimes(2);
    expect(component.pokemons[0]).toEqual(mockPokemon);
    expect(component.disabledNext).toBeTruthy();
    expect(component.disabledBack).toBeTruthy();
  });

  it('should search pokemon', async () => {
    const searchPokemonsService =
      fixture.debugElement.injector.get(PokeapiService);
    const spySearchPokemon = jest.spyOn(component, 'searchPokemon');
    const spyGetPokemon = jest
      .spyOn(searchPokemonsService, 'getPokemon')
      .mockReturnValue(of(mockDetailPokemon));
    const spyGetInfoPokemon = jest
      .spyOn(searchPokemonsService, 'getInfoPokemon')
      .mockReturnValue(of(mockSpeciesPokemon));
    await component.searchPokemon('caterpie');
    expect(spySearchPokemon).toHaveBeenCalled();
    expect(spyGetPokemon).toHaveBeenCalled();
    expect(spyGetInfoPokemon).toHaveBeenCalledTimes(1);
    delete mockPokemon.url;
    expect(component.pokemons[0]).toEqual(mockPokemon);
    expect(component.disabledNext).toBeTruthy();
    expect(component.disabledBack).toBeTruthy();
  });
});
