import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  DetailPokemon,
  GetPokemonResult,
  SpeciesPokemon,
} from '../model/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private http: HttpClient) {}

  getPokemons(limit: string, offset: string): Observable<GetPokemonResult> {
    return this.http.get<GetPokemonResult>(`${environment.API_URL}/pokemon`, {
      params: {
        limit,
        offset,
      },
    });
  }

  getPokemon(name: string): Observable<DetailPokemon> {
    return this.http.get<DetailPokemon>(
      `${environment.API_URL}/pokemon/${name}`
    );
  }

  getInfoPokemon(url: string): Observable<DetailPokemon | SpeciesPokemon> {
    return this.http.get<DetailPokemon | SpeciesPokemon>(url);
  }
}
