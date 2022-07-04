import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardDetailPokemonComponent } from './components/card-detail-pokemon/card-detail-pokemon.component';
import { CardSimplePokemonComponent } from './components/card-simple-pokemon/card-simple-pokemon.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { ApiPokemonService } from './services/api-pokemon.service';
import { Pokemon } from './model/pokemon';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
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
      providers: [ApiPokemonService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.title).toEqual('Listado de Pokemon');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.header h1').textContent).toContain(
      'Listado de Pokemon'
    );
  });

  it('should select pokemon', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let mockPokemon: Pokemon = {
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
    app.selectPokemon(mockPokemon);
    expect(app.selectedPokemon?.name).toBe('caterpie');
  });

  it('should next page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'searchPokemons');
    app.paginationNext();

    expect(app.searchPokemons).toHaveBeenCalled();
  });

  it('should back page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'searchPokemons');
    app.offset = 10;
    app.paginationBack();

    expect(app.searchPokemons).toHaveBeenCalled();
  });
});
